const { Recipe, Step, DietType } = require('../db');
const { Op, Sequelize } = require('sequelize');
const axios = require('axios');
const {
    API_KEY
} = process.env;

function recipeApiParser(recipe) {
    if (recipe.vegetarian)
        if (!recipe.diets.includes("vegetarian"))
            recipe.diets.push("vegetarian")

    if (recipe.vegan)
        if (!recipe.diets.includes("vegan"))
            recipe.diets.push("vegan");

    if (recipe.glutenFree)
        if (!recipe.diets.includes("gluten free"))
            recipe.diets.push("gluten free");

    return {
        Id: recipe.id,
        name: recipe.title,
        dish_summary: recipe.summary,
        health_score: recipe.healthScore,
        image: recipe.image,
        DietTypes: recipe.diets.map((diet)=> {
            return {name: diet}
        }),
        steps: recipe.analyzedInstructions.length ? recipe.analyzedInstructions[0].steps : []
    }
}

const getRecipesDB = async (name) => {
    console.log(API_KEY)
    return await Recipe.findAll(
        {

            where: name ? {
                name: {
                    [Op.match]: Sequelize.fn('to_tsquery', name.split(" ").join(" & "))
                }
            } : {}
        }
    );
}

const getRecipeByPkDB = async (id) => {
    return await Recipe.findByPk(
        id,
        {
            include: [
                {
                    model: Step,
                    attributes: { exclude: ['recipeId'] }
                },
                {
                    model: DietType,
                    attributes: ["name"],
                    through: { attributes: [] }
                }
            ]
        }
    );
}

const getRecipesAPI = async (name) => {
    return await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100` + (name ? "&query=" + name : ""))
        .then((response) => response.data.results)
        .then((data) => data.map((recipe) => recipeApiParser(recipe)))
        .catch( ()=> []);
}

const getRecipeByPkAPI = async (id) => {
    return await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        .then((response) => recipeApiParser(response.data))
        .catch( ()=> false);
}

const getRecipes = async (name) => {
    const result = await Promise.all([getRecipesDB(name), getRecipesAPI(name)])
    return [...result[0], ...result[1]];
}

const getRecipeByPK = async (id) => {
    if (id.includes('-'))
        return await getRecipeByPkDB(id);
    else
        return await getRecipeByPkAPI(id);
}

module.exports = {
    getRecipes,
    getRecipeByPK
}
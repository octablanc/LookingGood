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
        name: recipe.title,
        dish_summary: recipe.summary,
        health_score: recipe.healthScore,
        image: recipe.image,
        DietTypes: [],
        steps: recipe.analyzedInstructions.length ? recipe.analyzedInstructions[0].steps : []
    }
}

const getRecipesDB = async (name) => {
    console.log(API_KEY)

    try {
        
        const result = await Recipe.findAll(
            {
                include: [
                    {
                        model: DietType,
                        attributes: ["name"],
                        through: { attributes: [] }
                    }
                ],
                where: name ? {
                    name: {
                        [Op.match]: Sequelize.fn('to_tsquery', name.split(" ").join(" & "))
                    }
                } : {}
            }
        );
    
        if(!name && !result.length){
            const recipesAPI = await getRecipesAPI();

            const recipePormises = recipesAPI.map((recipe)=> saveRecipe(recipe));
            console.log(await Promise.all(recipePormises));

            return await getRecipesDB(name);
        }
    
        return result;
    } catch (error) {
        return { error: error.message };
    }
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
    return await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=20` + (name ? "&query=" + name : ""))
        .then((response) => response.data.results)
        .then((data) => data.map((recipe) => recipeApiParser(recipe)))
        .catch((error) => [ {error: error.message} ]);
}

const getRecipeByPkAPI = async (id) => {
    return await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        .then((response) => recipeApiParser(response.data))
        .catch(() => false);
}

const getRecipes = async (name) => {
    // const result = await Promise.all([getRecipesDB(name), getRecipesAPI(name)])
    // return [...result[0], ...result[1]];
    return await getRecipesDB(name);
}

const getRecipeByPK = async (id) => {
    if (id.includes('-'))
        return await getRecipeByPkDB(id);
    else
        return await getRecipeByPkAPI(id);
}

const saveRecipe = async ({ name, dish_summary, health_score, image, DietTypes, steps }) => {
    try {
        const newRecipe = await Recipe.create({name, dish_summary, health_score, image});
    
        const stepsToSave = steps.map((step)=> {
            return {...step, recipeId: newRecipe.dataValues.Id}
        })
        
        DietTypes.length && await newRecipe.setDietTypes(DietTypes);
        await Step.bulkCreate(stepsToSave);
    
        return newRecipe;
    } catch (error) {
        return { error: error.message }
    }
}

module.exports = {
    getRecipes,
    getRecipeByPK,
    saveRecipe
}
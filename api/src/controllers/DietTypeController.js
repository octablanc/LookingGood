const { DietType } = require('../db');
const axios = require('axios');

const {
    API_KEY
} = process.env;

async function getDiets() {

    try {
        var result = await DietType.findAll();
    
        if(!result.length) {
            const dietsAPI = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=5000&addRecipeInformation=true`))
                .data.results.map(el => el.diets);
    
            var dietsToSave = [];
            dietsAPI.forEach((diets) => {
                diets.forEach((diet) => {
                    if (!dietsToSave.includes(diet))
                        dietsToSave.push(diet);
                })
            });
    
            var result = await DietType.bulkCreate( dietsToSave.map((dieta) => { return { name: dieta } }) );
        }
        
        // console.log( await DietType.findOne({where: { name: "gluten free" }}))

        return result;
    } catch (error) {
        return { message: error.message}
    }
}

async function updateDiet(Id, name){
    try {
        const diet = await DietType.findByPk(Id);
        
        await diet.update({name});
        await diet.save();

        return diet;
    } catch (error) {
        return {message: error.message};
    }
}

module.exports = {
    updateDiet,
    getDiets
};
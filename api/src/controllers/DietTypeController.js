const { DietType } = require('../db');
const axios = require('axios');

const {
    API_KEY
} = process.env;

async function getDiets() {
    var result = await DietType.findAll();

    if(!result.length) {
        const dietsAPI = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7a1ebd0027744c6ba5ee4eac4a66c827&number=5000&addRecipeInformation=true`))
            .data.results.map(el => el.diets);

        var dietsToSave = [];
        dietsAPI.forEach((diets) => {
            diets.forEach((diet) => {
                if (!dietsToSave.includes(diet))
                    dietsToSave.push(diet);
            })
        });

        var result = DietType.bulkCreate( dietsToSave.map((dieta) => { return { name: dieta } }) );
        /// agregar las que faltan de la pagina
    }

    return result;
}

module.exports = getDiets;
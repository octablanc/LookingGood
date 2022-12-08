const express = require('express');
const recipeRouter = express.Router();
const { getRecipes, getRecipeByPK, saveRecipe } = require('../controllers/RecipeController');

recipeRouter.get('/', async (req, res)=>{
    try {
        const { name } = req.query;

        const result = await getRecipes(name);

        return res.send(result.length ? result : { error: 'No recipe found'});
    } catch (error) {
        return res.status(404).send();
    }
});

recipeRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getRecipeByPK(id);
        
        if(result)
            return res.send(result);
        throw new Error('No recipe found');
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }
});

recipeRouter.post('/', async (req, res)=> {
    try {
        const recipe = req.body;
        console.log(req.body);
        const result = await saveRecipe(recipe);
        
        if(result)
            return res.send(result);
        throw new Error('There was an error trying to save the recipe');
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }
});

module.exports = recipeRouter;
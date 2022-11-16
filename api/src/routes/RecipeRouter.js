const express = require('express');
const recipeRouter = express.Router();
const { getRecipes, getRecipeByPK } = require('../controllers/RecipeController');

recipeRouter.get('/', async (req, res)=>{
    try {
        const { name } = req.query;

        const result = await getRecipes(name);

        if(result.length)
            return res.send(result);
        throw new Error('No recipe found');
    } catch (error) {
        return res.status(404).send({ error: error.message});
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

module.exports = recipeRouter;
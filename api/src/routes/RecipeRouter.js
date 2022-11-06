const express = require('express');
const recipeRouter = express.Router();
const { Recipe, Step } = require('../db');

recipeRouter.get('/', async(req, res)=>{
    try {
        const result = await Recipe.findAll(
            {
                include: [
                    {
                        model: Step,
                        attributes: {exclude: ['recipeId']}
                    }
                ]
            }
        );
        return res.send(result);
    } catch (error) {
        return res.status(404).send({ error: error.message});
    }
});

module.exports = recipeRouter;
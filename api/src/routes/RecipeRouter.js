const express = require('express');
const recipeRouter = express.Router();
const { Recipe, Step } = require('../db');
const { Op, Sequelize } = require('sequelize');

recipeRouter.get('/', async(req, res)=>{
    try {
        const { name } = req.query;

        console.log(name);
        const result = await Recipe.findAll(
            {
                where: name? {
                    name: {
                        [Op.match]: Sequelize.fn('to_tsquery', name.split(" ").join(" & "))
                    }
                } : {}
            }
        );

        if(result.length)
            return res.send(result);
        throw new Error('No recipe found');
    } catch (error) {
        return res.status(404).send({ error: error.message});
    }
});

recipeRouter.get('/:id', async(req, res)=>{
    try {
        const { id } = req.params;
        const result = await Recipe.findByPk(
            id,
            {
                include: [
                    {
                        model: Step,
                        attributes: {exclude: ['recipeId']}
                    }
                ]
            }
        );
        
        if(result)
            return res.send(result);
        throw new Error('No recipe found');
    } catch (error) {
        return res.status(404).send({ error: error.message});
    }
});

module.exports = recipeRouter;
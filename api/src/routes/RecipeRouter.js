const express = require('express');
const recipeRouter = express.Router();
const { Recipe, Step } = require('../db');
const { Op, Sequelize } = require('sequelize');

recipeRouter.get('/', async(req, res)=>{
    try {
        const { name } = req.query;
        const result = await Recipe.findAll(
            {
                include: [
                    {
                        model: Step,
                        attributes: {exclude: ['recipeId']}
                    }
                ],
                where: name? {
                    name: {
                        [Op.match]: Sequelize.fn('to_tsquery', name.replace(' ', ' & '))
                    }
                } : {}
            }
        );
        return res.send(result.length? result : { message: 'No recipe found'});
    } catch (error) {
        return res.status(404).send({ error: error.message});
    }
});

module.exports = recipeRouter;
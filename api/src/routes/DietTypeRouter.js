const express = require('express');
const DietTypeRouter = express.Router();
const { DietType } = require('../db');

DietTypeRouter.get('/', async (req, res)=>{
    try {
        const result = await DietType.findAll();
        return res.send(result.length? result : { message: "No type of diet found" });
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
});

DietTypeRouter.post("/", async (req, res)=>{
    try {
        const { name } = req.body;
        const newDietType = await DietType.create( {name} );
        return res.send(newDietType);
    } catch (error) {
        return res.statusCode(404).send( { error: error.message } )
    }
});

module.exports = DietTypeRouter;
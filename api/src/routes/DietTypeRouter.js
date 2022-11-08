const express = require('express');
const DietTypeRouter = express.Router();
const { Diet_type } = require('../db');

DietTypeRouter.get('/', async (req, res)=>{
    try {
        const result = await Diet_type.findAll();
        return res.send(result.length? result : { message: "No type of diet found" });
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
});

module.exports = DietTypeRouter;
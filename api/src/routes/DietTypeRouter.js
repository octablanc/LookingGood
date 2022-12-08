const express = require('express');
const DietTypeRouter = express.Router();
const {getDiets, updateDiet} = require('../controllers/DietTypeController');

DietTypeRouter.get('/', async (req, res)=>{
    try {
        const result = await getDiets();
        return res.send(result.length? result : { message: "No type of diet found" });
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
});

DietTypeRouter.put('/:id', async (req, res)=>{
    try {
        const { name } = req.body;
        const { id }  = req.params;
        
        const dietUpdated = await updateDiet(id, name);
        return res.send(dietUpdated);
    } catch (error) {
        return res.statusCode(400).send({ message: error.message });
    }
})

module.exports = DietTypeRouter;
const express = require('express');
const DietTypeRouter = express.Router();
const getDiets = require('../controllers/DietTypeController');

DietTypeRouter.get('/', async (req, res)=>{
    try {
        const result = await getDiets();
        return res.send(result.length? result : { message: "No type of diet found" });
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
});

module.exports = DietTypeRouter;
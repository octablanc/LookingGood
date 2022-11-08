const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const RecipeRouter = require('./RecipeRouter');
const DietTypeRouter = require('./DietTypeRouter');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', RecipeRouter);
router.use('/diet_types', DietTypeRouter);

module.exports = router;

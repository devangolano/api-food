// Importa o Express e cria um router
const express = require("express");
const router = express.Router();

// Importa o controlador de Food
const foodController = require("../controllers/foodController");

// Define todas as rotas relacionadas a Food
// Rota base: /api/food

// GET /api/food - Lista todas as comidas
router.get("/", foodController.getAllFoods);

// POST /api/food - Cria uma nova comida
router.post("/", foodController.createFood);

// GET /api/food/:id - Busca uma comida específica
router.get("/:id", foodController.getFoodById);

// PUT /api/food/:id - Atualiza uma comida
router.put("/:id", foodController.updateFood);

// DELETE /api/food/:id - Remove uma comida
router.delete("/:id", foodController.deleteFood);

module.exports = router;

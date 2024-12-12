// Importa o modelo Food
const Food = require("../models/Food.js");

// Objeto que contém todos os controladores relacionados a Food
const foodController = {
  // Lista todos os itens de comida
  getAllFoods: async (req, res) => {
    try {
      const foods = await Food.find();
      res.status(200).json(foods);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao buscar comidas", error: error.message });
    }
  },

  // Cria um novo item de comida
  createFood: async (req, res) => {
    try {
      // Verifica se já existe um item com o mesmo id
      const existingFood = await Food.findOne({ id: req.body.id });
      if (existingFood) {
        return res
          .status(400)
          .json({ message: "Já existe um item com este ID" });
      }

      const food = new Food(req.body);
      const savedFood = await food.save();
      res.status(201).json(savedFood);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao salvar comida", error: error.message });
    }
  },

  // Busca um item específico pelo ID
  getFoodById: async (req, res) => {
    try {
      const food = await Food.findById(req.params.id);
      if (!food) {
        return res.status(404).json({ message: "Comida não encontrada" });
      }
      res.status(200).json(food);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao buscar comida", error: error.message });
    }
  },

  // Atualiza um item pelo ID
  updateFood: async (req, res) => {
    try {
      const updatedFood = await Food.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedFood) {
        return res.status(404).json({ message: "Comida não encontrada" });
      }
      res.status(200).json(updatedFood);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao atualizar comida", error: error.message });
    }
  },

  // Remove um item pelo ID
  deleteFood: async (req, res) => {
    try {
      const deletedFood = await Food.findByIdAndDelete(req.params.id);
      if (!deletedFood) {
        return res.status(404).json({ message: "Comida não encontrada" });
      }
      res.status(200).json({ message: "Comida removida com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao excluir comida", error: error.message });
    }
  },
};

module.exports = foodController;

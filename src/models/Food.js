// Importa o mongoose para criar o modelo
const mongoose = require("mongoose");

// Define o esquema (structure) para o modelo Food
const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nome é obrigatório"],
    },
    price: {
      type: Number,
      required: [true, "Preço é obrigatório"],
    },
    time: {
      type: Number,
      required: [true, "Tempo é obrigatório"],
    },
    delivery: {
      type: Number,
      required: [true, "Taxa de entrega é obrigatória"],
    },
    rating: {
      type: Number,
      required: [true, "Avaliação é obrigatória"],
    },
    image: {
      type: String,
      required: [true, "URL da imagem é obrigatória"],
    },
    restaurantId: {
      type: Number,
      required: [true, "ID do restaurante é obrigatório"],
    },
  },
  {
    // Adiciona timestamps (createdAt e updatedAt) automaticamente
    timestamps: true,
  }
);

// Cria e exporta o modelo Food
module.exports = mongoose.model("Food", foodSchema);

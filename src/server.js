// Importa as bibliotecas necessárias
require("dotenv").config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require("express");
const connectDB = require("./config/database");

// Cria a aplicação Express
const app = express();

// Define a porta do servidor
const PORT = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(express.json());

// Conecta ao banco de dados
connectDB();

// Rota básica para verificar se a API está funcionando
app.get("/", (req, res) => {
  res.send("API de Comida está funcionando! 🚀");
});

// Importa e usa as rotas de Food
app.use("/api/food", require("./routes/foodRoutes"));

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

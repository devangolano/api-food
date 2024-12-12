// Importa a biblioteca mongoose para conexão com MongoDB
const mongoose = require("mongoose");

// Função para conectar ao banco de dados
const connectDB = async () => {
  try {
    // Conecta ao MongoDB usando a URL do arquivo .env
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão com MongoDB estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    process.exit(1); // Encerra a aplicação em caso de erro
  }
};

// Exporta a função para ser usada em outros arquivos
module.exports = connectDB;

const express = require('express');
const app = express();
const port = 3000; // Pode alterar a porta, se necessário

// Rota principal que retorna a mensagem de boas-vindas
app.get('/test', (req, res) => {
  res.json({
    message: "Bem-vindo à minha API em NodeJS!"
  });
});

// Inicia o servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`API rodando em http://localhost:${port}`);
});

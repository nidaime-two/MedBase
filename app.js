require('dotenv').config()
const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors({origin: 'http://localhost:3000', 
credentials: true}));

app.use(express.json());

const Recepcao = require("./src/routes/recepcao")

app.use("/recepcao",Recepcao)


app.get('/', (req, res) => {
  res.send('Servidor Express rodando!');
});

const port = process.env.SERVER_PORT || 3000; 
// Inicia o servidor Express.js
app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
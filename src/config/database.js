const { Database } = require("arangojs") 

try{
  const db = new Database(
    {
      url: process.env.DB_HOST, // URL do servidor ArangoDB
      databaseName: process.env.DB_NAME,   // Nome do banco de dados que você deseja criar
      auth:{ username: process.env.DB_USER, password: process.env.DB_PASS } // Credenciais de autenticação
    }
    )
    module.exports = db;
}catch(e){
  console.log("Error: ",e)
}
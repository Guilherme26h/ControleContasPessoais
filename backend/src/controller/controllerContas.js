const ContaDB = require("../model/contasModel");

module.exports = {
  get: async (req, res) => {
    try {
      const resultConts = await ContaDB.find();
      res.json({ resultConts });
    } catch (err) {
      res.json({ message: "Falha na Requisição" });
    }
  },

  getById: async (req, res) => {

    const url = req.params.id;
    nome = url
    

    try {
      const resultConts = await ContaDB.findOne({nome : nome});
      res.json({ resultConts });
    } catch (err) {
      res.json({ message: "Falha na Requisição" });
    }
  },
  post: async (req, res) => {
    try {
         const resultConts = await ContaDB.create({
        id: req.body.id,
        nome: req.body.nome,
        tipo: req.body.tipo,
        mes: req.body.mes,
        ano: req.body.ano,
        value: req.body.value,
        user: req.body.user
      });
      res.json({message : "Criado com sucesso"});
    } catch (err) {
      res.json({ message: "Falha na Requisição" });
    }
  },
  put: (req, res) => {
    
  },
  delete: (req, res) => {
    
  }
};

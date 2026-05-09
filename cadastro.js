const express = require('express');
const app = express();
app.use(express.json());

let alunos = [];

// Rota para cadastrar aluno
app.post('/alunos', (req, res) => {
    const { nome, rgm } = req.body;
    alunos.push({ nome, rgm });
    res.status(201).json({ mensagem: "Aluno cadastrado com sucesso!", dados: { nome, rgm } });
});

// Rota para listar alunos
app.get('/alunos', (req, res) => {
    res.json(alunos);
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
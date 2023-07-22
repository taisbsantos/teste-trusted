import express from 'express';
import fs from 'fs';
import { criarArquivoDeProcessamento, inserirUsuariosNoArquivo } from '../files/processing-files.mjs';
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3030;

const dadosFile = './services/files/dados.json';
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/api/usuarios', (req, res) => {
  try {
    const { id, login } = req.query;
    const dados = fs.readFileSync(dadosFile, 'utf8').split('\n').filter(Boolean);
    let usuarios = dados.map((linha) => JSON.parse(linha));

   
    if (id) {
      usuarios = usuarios.filter((usuario) => usuario.id == id);
    } else if (login) {
      usuarios = usuarios.filter((usuario) => usuario.login === login);
    }

    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao ler o arquivo de dados:', error.message);
    res.status(500).json({ error: 'Erro ao obter os usuários.' });
  }
});

app.post('/api/usuarios', (req, res) => {
    try {
      const { nomes } = req.body;
      if (!Array.isArray(nomes) || nomes.length === 0) {
        return res.status(400).json({ error: 'Usuários inválidos.' });
      }
        criarArquivoDeProcessamento(nomes);
        res.status(200).json({ success: 'Sucesso ao inserir usuários' });

      } catch (error) {
      res.status(500).json({ error: 'Erro ao inserir usuários' });
    }
  });
  

app.listen(port, () => {
  console.log(`API backend rodando em http://localhost:${port}`);
});

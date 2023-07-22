import fs from 'fs';
import cron from 'node-cron';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const inputFile = './files/processar/teste.txt';
const outputFile = './services/files/dados.json';

async function processarNomes() {
    const dataHora = gerarDataFormatada();
    try {
        const nomes = fs.readFileSync(inputFile, 'utf8').split('\n').filter(Boolean);
        inserirUsuariosNoArquivo(nomes);
        
        fs.renameSync(inputFile, `./files/processados/nomes_data_horario_${dataHora}.txt`);
        console.log('Processamento concluído!');

    } catch (error) {
        if(error.code === "ENOENT"){
            console.error("Não há novo arquivo para ser processado");
        }else{
            console.error('Erro ao ler o arquivo de usuarios:', error.message);
        }
    }
}
cron.schedule('*/10 * * * *', () => {
    console.log('Executando o serviço...');
    processarNomes();
});

export async function buscarUsuarios(nome) {
    const token = process.env.GITHUB_ACCESS_TOKEN;
    try {
        const response = await axios.get(`https://api.github.com/users/${nome} `, {
            headers: {
                 Authorization: `Bearer ${token}` 
            }
    });

    const usuarioInfo = response.data;
    return usuarioInfo;
        

    } catch (error) {
        if(error.response.status == 404){
            console.error(`Usuario "${nome}" não existe`);
        }else{
            console.error(`Erro ao processar o usuario "${nome}":`, error.message);
        }
    }
}

export async function inserirUsuariosNoArquivo(nomes){
    const usuariosGithub = []

    for (const nome of nomes) {
        let usuario = await buscarUsuarios(nome);
        if(usuario != undefined){
            usuariosGithub.push(usuario)
        }
    }

    const dadosFormatados = usuariosGithub.map((usuario) => JSON.stringify(usuario));
    fs.appendFileSync(outputFile, dadosFormatados.join('\n') + '\n');
}

export async function criarArquivoDeProcessamento(nomes){
    fs.appendFileSync(inputFile, nomes.join('\n') + '\n');
}


function gerarDataFormatada() {
    const dataAtual = new Date();

    const dataFormatada = dataAtual.toLocaleString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    return dataFormatada.replace(/[\/\s:]/g, '');
}


processarNomes();
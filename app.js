const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.options('*', cors());
app.use(express.json());

//configurando as rotas
const tarefaRouter = require('./controllers/tarefaController');
app.use('/tarefa', tarefaRouter);


app.listen(3000, () => console.log('Servidor iniciado na porta 3000')); 

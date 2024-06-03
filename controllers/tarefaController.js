const express = require('express');
const router = express.Router();
const { randomUUID } = require('crypto');

const tarefas = [];

router.post("/", (req, res) => {
    const { descricao, concluida } = req.body;
    const tarefa = {
        descricao,
        concluida,
        id: randomUUID()
    }
    tarefas.push(tarefa);

    return res.json(tarefa);
})

router.get('/', (req, res) => {
    res.json(tarefas);
});

router.get('/:id', (req, res) => {

    const tarefa = tarefas.find(tarefa => tarefa.id === req.params.id);
    if (!tarefa) {
        res.status(400).json({ error: 'Tarefa não encontrada' });
    }
    res.json(tarefa);
});

router.put("/:id", (req, res) => {
    const tarefaId = req.params.id;
    const updates = req.body;

    const tarefa = tarefas.find(tarefa => tarefa.id === tarefaId);
    if (!tarefa) {
        res.status(400).json({ error: 'Tarefa não encontrada' });
    }

    Object.assign(tarefa, updates);

    return res.json(tarefa);
})

router.delete("/:id", (req, res) => {
    const tarefaId = req.params.id;

    const tarefa = tarefas.find(tarefa => tarefa.id === tarefaId);
    if (!tarefa) {
        res.status(400).json({ error: 'Tarefa não encontrada' });
    }

    tarefas.splice(tarefas.indexOf(tarefa), 1);

    return res.json(tarefa);
})



module.exports = router;

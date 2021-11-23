const express = require('express');
const cors  = require('cors');
const TodolistRouter = require('./routes/todolist.routes');
const Conn = require('./conn/conn');
const app = express();

app.use(express.json());

app.use(cors());

app.use('/todolist', TodolistRouter);

Conn();

const port = 3001;
app.listen(port, () => {
  console.log(`O servidor esta rodando na porta ${port}`);
})
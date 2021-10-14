const express = require('express')

const { getTodosEstudantes } = require('./routers/estudanteRouter')
const { converterRealParaDolar } = require('./routers/moedaRouter')

const aplicativo = express()

aplicativo.get('/alunos/todos', getTodosEstudantes)

aplicativo.get('/moeda/:valor_real', converterRealParaDolar)

aplicativo.listen(3000, () => {
  console.log('Servidor ligado na porta 3000...')
})
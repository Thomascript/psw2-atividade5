exports.getTodosEstudantes = (_, resposta) => {
  resposta.json(
    [
      {
        id: 1,
        name: 'Serginho Groisman'
      },
      {
        id: 2,
        name: 'Didi Aragão'
      },
      {
        id: 3,
        name: 'Luiza Cadillac'
      },
    ]
  )
}
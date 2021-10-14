const { converterRealParaDolar } = require('../services/converterRealParaDolar')

exports.converterRealParaDolar = async (req, res) => {
  try {
    const valorEmReal = parseFloat(req.params.valor_real)

    if (isNaN(valorEmReal) || valorEmReal < 0) {
      res.status(400).json({
        message: 'O valor tem que ser um inteiro não negativo'
      })
      return
    }

    const resultado = await converterRealParaDolar(valorEmReal)

    res.json({
      moedaOrigem: 'BRL',
      moedaDestino: 'USD',
      valorOriginal: valorEmReal,
      valorConvertido: resultado,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Algum erro no servidor'
    })
  }
}
const api = require('./api')

exports.converterRealParaDolar = async (valorEmReal) => {
  const { data } = await api.get('/json/last/USD-BRL')
  const { USDBRL: { bid } } = data
  return valorEmReal / bid
}
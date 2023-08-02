/**
 * Manejadores para la calculadora de criptomonedas.
 * @param {Object} requires - Los módulos requeridos para la función.
 * @returns {Object} - Un objeto que contiene los endPoints de la calculadora.
 */
const calculatorHandlers = requires => ({
	getCryptoReturn: async (req, res) => {
		const { amount } = req.query
		try {
			const { loadDataCryptoReturn, axios, coin } = requires
			const dataCryptoReturn = await loadDataCryptoReturn()
			const MESSARI_API_KEY = process.env.MESSARI_API_KEY

			const {
				data: { data: dataCoins }
			} = await axios.get(
				'https://data.messari.io/api/v2/assets?fields=slug,symbol,metrics/market_data/price_usd',
				{ headers: { 'x-messari-api-key': MESSARI_API_KEY } }
			)

			const coins = dataCryptoReturn
				.map(row =>
					coin({
						coin: row,
						amount: parseFloat(amount),
						dataCoins
					})
				)
				.filter(row => row !== null)

			res.status(200).json({ ok: true, coins })
		} catch (e) {}
	}
})

module.exports = calculatorHandlers

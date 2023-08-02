/**
 * Calcula la ganancia anual y balance final proyectado para una criptomoneda.
 * @param {Object} options - Las opciones para la función.
 * @param {string} options.coin - La criptomoneda que se está evaluando.
 * @param {number} options.amount - La cantidad de la criptomoneda USD.
 * @param {Array} options.dataCoins - Los datos de mercado de las criptomonedas.
 * @param {number} options.monthlyReturn - El retorno mensual proyectado para la criptomoneda.
 * @returns {Object} - Los resultados del cálculo.
 */
const coin = options => {
	const { coin, amount, dataCoins } = options

	// Busca los datos de la criptomoneda en el array de datos de mercado
	const dataCoin = dataCoins.find(itemCoin => itemCoin.slug === coin.crypto)

	// Si no encuentra la criptomoneda, retorna un null
	if (!dataCoin) return null

	// Obtiene el precio actual de la criptomoneda en USD
	const cryptoPrice = parseFloat(dataCoin.metrics.market_data.price_usd)
	const monthlyReturn = parseFloat(coin.retorno)

	// Función para calcular ganancia anual
	const calculateAnnualProfit = (amount, price, monthlyReturn) => {
		const valueInUSD = amount * price
		const annualReturn = Math.pow(1 + monthlyReturn, 12) - 1
		return valueInUSD * annualReturn
	}

	// Ganancia anual proyectada en USD para la Crypto
	const annualProfit = calculateAnnualProfit(amount, cryptoPrice, monthlyReturn)

	// Balance final
	const initialBalance = amount * cryptoPrice

	// Balance final proyectado en USD para la Crypto más la ganancia anual.
	const finalBalanceUSD = initialBalance + annualProfit

	// El balance final proyectado en Crypto más la ganancia anual
	const finalBalanceCrypto = finalBalanceUSD / cryptoPrice

	return {
		criptomoneda: coin.criptomoneda,
		name: coin.nombre,
		crypto: coin.crypto,
		return: monthlyReturn,
		annualProfit,
		finalBalanceUSD,
		finalBalanceCrypto,
		cryptoPrice
	}
}

module.exports = { coin }

export const currencyFormat = (num, fixed = 2) =>
	num.toFixed(fixed).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

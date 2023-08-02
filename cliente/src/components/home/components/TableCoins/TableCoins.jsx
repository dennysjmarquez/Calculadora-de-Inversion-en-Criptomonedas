import React from 'react'
import clsx from 'clsx'
import { currencyFormat } from '@/utils/currencyFormat.js'

const TableCoins = function TableCoins({ data = [] }) {
	return (
		<>
			<section className="container px-4 mx-auto max-w-screen-lg w-full">
				<div className="flex flex-col">
					<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
								<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
									<thead className="bg-gray-50 dark:bg-gray-800">
										<tr>
											<th
												scope="col"
												className={clsx(
													'py-3.5 px-4 text-sm font-normal text-left',
													'rtl:text-right text-gray-500 dark:text-gray-400',
													'w-fit'
												)}
											>
												<div className="flex items-center gap-x-3">#</div>
											</th>

											<th
												scope="col"
												className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
											>
												Activo
											</th>

											<th
												scope="col"
												className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
											>
												Precio actual
											</th>

											<th
												scope="col"
												className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
											>
												Comisión de servicio
											</th>

											<th
												scope="col"
												className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
											>
												Balance final USD
											</th>

											<th
												scope="col"
												className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
											>
												Balance final Cripto
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
										{data.map((coin, index) => (
											<tr key={coin.crypto}>
												<td
													className={clsx(
														'px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap w-fit'
													)}
												>
													{index}
												</td>
												<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
													<div className="inline-flex items-center pr-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
														<img
															alt=""
															src={`./src/assets/images/coin-icons/${coin.criptomoneda}.png`}
															className="max-w-[22px]"
														/>
														<h2 className="text-sm font-normal">{coin.name}</h2>
													</div>
												</td>
												<td className="px-4 py-4 text-sm font-medium text-gray-200 whitespace-nowrap">
													$ {currencyFormat(coin.cryptoPrice)}
												</td>
												<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
													<div className="flex items-center gap-x-2">
														<div>{currencyFormat(coin.return)} %</div>
													</div>
												</td>
												<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
													$ {currencyFormat(coin.finalBalanceUSD)}
												</td>
												<td className="px-4 py-4 text-sm whitespace-nowrap">
													<div className="flex items-center gap-x-6">
														<div>
															<span className="text-gray-500">
																{coin.criptomoneda}
															</span>{' '}
															{currencyFormat(coin.finalBalanceCrypto)}
														</div>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default React.memo(TableCoins)

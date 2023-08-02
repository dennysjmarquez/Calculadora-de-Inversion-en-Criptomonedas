import React, { useCallback, useRef, useState } from 'react'
import clsx from 'clsx'
import Cleave from 'cleave.js/react'
import TableCoins from './components/TableCoins'

const Home = function Home() {
	const [dataCoins, setDataCoins] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const investment = useRef(0)

	const getDataCoins = useCallback(async () => {
		try {
			if (!investment.current || investment.current === 0) return

			setIsLoading(true)
			const response = await fetch(
				`${import.meta.env.VITE_SERVER_URL}/calculator?amount=${
					investment.current
				}`
			)
			const data = await response.json()

			if (data.ok) {
				setDataCoins(data.coins)
			}
		} catch (error) {
		} finally {
			setIsLoading(false)
		}
	}, [investment])

	const handlerInvestmentOnChange = useCallback(
		({ target }) => (investment.current = target.rawValue),
		[]
	)

	return (
		<>
			{isLoading && (
				<div
					className={clsx(
						'flex items-center justify-center w-full',
						'h-full fixed top-0 bottom-0 left-0 right-0 z-50',
						'bg-gray-600 bg-opacity-75'
					)}
				>
					<div
						className="inline-block h-12 w-12 rounded-full bg-current align-[-0.125em]"
						role="status"
					/>
				</div>
			)}

			<div className="mt-10">
				<div className="max-w-sm w-full p-4 m-auto mt-2 mb-8">
					<h1 className="text-2xl font-semibold text-center ">
						Criterios de proyección
					</h1>

					<div className="mt-7">
						<label htmlFor="email" className="block mb-2 text-sm">
							Inversión inicial
						</label>

						<Cleave
							options={{
								numeral: true,
								numeralPositiveOnly: true,
								numeralDecimalMark: ',',
								delimiter: '.'
							}}
							onChange={handlerInvestmentOnChange}
							className={clsx(
								'appearance-none block w-full px-3 py-2 border',
								'border-gray-300 rounded-md shadow-sm placeholder-gray-400',
								'text-sm focus:outline-none font-Roboto md:text-lg shadow-sm',
								'text-black'
							)}
							value={investment.current}
						/>
					</div>
					<div className="flex justify-center mt-5">
						<button
							className={clsx(
								'px-4 py-2 mt-2 text-gray-600 transition-colors',
								'duration-300 transform border rounded-lg dark:text-gray-200',
								'dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none'
							)}
							onClick={getDataCoins}
						>
							Calcular
						</button>
					</div>
				</div>
				<TableCoins data={dataCoins} />
			</div>
		</>
	)
}
export default React.memo(Home)

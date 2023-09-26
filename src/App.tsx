import 'inter-ui/inter.css'
import Day from './components/dayComponent/Day'
import Table from './components/table/Table'
import {
	Container,
	Explanation,
	Flex,
	Months,
	TableContent,
	Weeks
} from './styles'

function App() {
	function getMonths() {
		const monthsArr = [
			'Апр.',
			'Май',
			'Июнь',
			'Июль',
			'Авг.',
			'Сент.',
			'Окт.',
			'Нояб.',
			'Дек.',
			'Янв.',
			'Февр.',
			'Март'
		]
		const currentDate = new Date()
		const currentMonth = currentDate.getMonth()
		const Months = []

		for (let i = monthsArr.length - 1; i > currentMonth; i--) {
			const monthName = currentDate.toLocaleDateString('ru-RU', {
				month: 'short'
			})
			Months.push(monthName)
			currentDate.setMonth(currentDate.getMonth() - 1)
		}
		for (let i = currentMonth; i >= 0; i--) {
			const monthName = currentDate.toLocaleDateString('ru-RU', {
				month: 'short'
			})
			Months.push(monthName)
			currentDate.setMonth(currentDate.getMonth() - 1)
		}
		const reverseMonths = Months.reverse()
		return reverseMonths.map((str) => {
			const firstLetter = str.charAt(0).toUpperCase()
			const restOfStr = str.slice(1)
			return firstLetter + restOfStr
		})
	}

	const months = getMonths()

	return (
		<>
			<Container>
				<Months>
					{months.map((month) => (
						<p key={month}>{month}</p>
					))}
				</Months>
				<Weeks>
					<p>Пн</p>
					<p>Ср</p>
					<p>Пт</p>
				</Weeks>
				<TableContent>
					<Table />
				</TableContent>
				<Explanation>
					<p>Меньше</p>
					<Flex>
						<Day count={0} />
						<Day count={'1-9'}/>
						<Day count={'10-19'}/>
						<Day count={'20-29'}/>
						<Day count={'30+'}/>
					</Flex>
					<p>Больше</p>
				</Explanation>
			</Container>
		</>
	)
}

export default App

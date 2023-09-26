import { useState } from 'react'
import Day from '../dayComponent/Day'
import { Container, Explanation, Flex, Months, TableContent, Weeks } from './styles'

type Props = {}

export default function Table({}: Props) {
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

	const currentDate = new Date()

	const weeks = Array.from({ length: 51 }, (_, index) => index + 1).reverse()

	const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

	return (
		<Container>
			<Months>
				{months.map((month) => (
					<p>{month}</p>
				))}
			</Months>
			<Weeks>
				<p>Пн</p>
				<p>Ср</p>
				<p>Пт</p>
			</Weeks>
			<TableContent>
				<table>
					<tbody>
						{daysOfWeek.map((day) => (
							<tr key={day}>
								{weeks.map((week) => (
									<td key={week}>
										{currentDate.getDay() < daysOfWeek.indexOf(day) &&
										week === 1 ? null : (
											<Day />
										)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</TableContent>
			<Explanation>
        <p>Меньше</p>
        <Flex>
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
        </Flex>
        <p>Больше</p>
      </Explanation>
		</Container>
	)
}

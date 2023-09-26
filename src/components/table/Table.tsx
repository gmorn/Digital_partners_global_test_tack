import { useEffect, useState } from 'react'
import CalendarService from '../../services/calendarService'
import Day from '../dayComponent/Day'
import { Container, Week } from './styles'

type Props = {}

type T_Days = {
	date: string
	count?: number
}

export default function Table({}: Props) {
	const [calendar, setCalendar] = useState(null)
	const [days, setDays] = useState<T_Days[]>([])

	useEffect(() => {
		const fetchCalendar = async () => {
			const { data } = await CalendarService.getCalendar()
			setCalendar(data)
		}
		fetchCalendar()
	}, [])

	useEffect(() => {
		if (calendar === null) return
		const today = new Date()
		const dayOfWeek = today.getDay()
		const DaysCount = dayOfWeek + 7 * 50 - 1
		const newDays = []

		for (let index = DaysCount; index !== -1; index--) {
			const currentDate = new Date()
			const targetDate = new Date(currentDate)
			targetDate.setDate(currentDate.getDate() - index)

			const year = targetDate.getFullYear()
			const month = String(targetDate.getMonth() + 1).padStart(2, '0') // Добавляем ведущий ноль, если месяц < 10
			const day = String(targetDate.getDate()).padStart(2, '0') // Добавляем ведущий ноль, если день < 10

			const count = calendar[`${year}-${month}-${day}`]

			const targetDateString = targetDate.toDateString()
			if (count !== undefined) {
				newDays.push({ date: targetDateString, count })
			} else {
				newDays.push({ date: targetDateString })
			}
		}

		setDays(newDays)

		console.log(DaysCount)
	}, [calendar])

	useEffect(() => {
		// console.log(days[days.length-1])
		// for (let indexRow = 0; indexRow < 51; indexRow++) {
		// 	for (let index = 1; index < 8; index++) {
		// 		console.log(indexRow * 7 + index)
		// 	}
		// }
	}, [days])

	if (days.length === 0) return <>loading...</>

	return (
		<Container>
			{Array.from({ length: 51 }, (_, indexRow) => (
				<Week key={indexRow}>
					{Array.from({ length: 7 }, (_, index) =>
						indexRow * 7 + index < days.length ? (
							<Day
								key={index}
								date={days[indexRow * 7 + index].date}
								count={
									days[indexRow * 7 + index].count !== undefined
										? days[indexRow * 7 + index].count
										: null
								}
							/>
						) : null
					)}
				</Week>
			))}
		</Container>
	)
}

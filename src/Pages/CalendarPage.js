import React, { useEffect, useState } from 'react'
import Calendar from '../components/Calendar/Calendar';
import "./CalendarPage.css"

export default function CalendarPage() {

	const _DATE = new Date();
	const [calendarData, setCalendarData] = useState([])
	const [currentMonth, setCurrentMonth] = useState(_DATE.getMonth())

	useEffect(() => {
		const nCalendar = [];
		const day = 86400000;
		const date = new Date();
		date.setMonth(currentMonth)
		date.setDate(1)
		const firstDay = date.getDay();
		let maxItems = 42;
		if (firstDay != 1) {
			let lastMondayPrevMonth = new Date();
			lastMondayPrevMonth.setDate(1);
			lastMondayPrevMonth.setMonth(currentMonth);
			while (lastMondayPrevMonth.getDay() !== 1) {
				lastMondayPrevMonth.setDate(lastMondayPrevMonth.getDate() - 1);
			}
			date.setDate(1);
			let count = Math.round((date - lastMondayPrevMonth) / 86400000);

			for (var i = 0; i < count; i++) {
				const d = new Date();
				d.setMonth(currentMonth)
				d.setDate(-count + i + 1)
				let newItem = {
					date: d,
					tasks: [{
						title: `Do something ${-count + i + 1}`,
						color: '#333',
						backgroundColor: "#eaeaea",
					}]
				}
				nCalendar.push(newItem);
				maxItems--;
			}
		}

		for (var i = 1; i <= maxItems; i++) {

			const d = new Date();
			d.setMonth(currentMonth)
			d.setDate(i);
			let newItem = {
				date: d,
				tasks: [{
					title: `Do something ${i}`,
					color: '#333',
					backgroundColor: "#eaeaea",
				}]
			}
			nCalendar.push(newItem)
		}

		setCalendarData(nCalendar);
	}, [currentMonth])

	const showCalendarRows = () => {
		return calendarData.map((e, i) => (
			<Calendar data={e} key={i} />
		))
	}

	return (
		<div className="calendar_wrapper">
			<input type="button" value="<- Prev month" onClick={() => setCurrentMonth(currentMonth - 1)} />
			<input type="button" value="Next month ->" onClick={() => setCurrentMonth(currentMonth + 1)} />
			<span style={{ color: "#eaeaea" }} >Current month {currentMonth + 1}</span>
			<div className="calendar">
				{showCalendarRows()}
			</div>
		</div>
	)
}

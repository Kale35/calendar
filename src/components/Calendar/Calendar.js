import React from 'react'
import './Calendar.css'

export default function Calendar(props) {
	const { data } = props
	let day = "x"
	switch (data.date.getDay()) {
		case 0:
			day = "Sunday"
			break;
		case 1:
			day = "Monday"
			break;
		case 2:
			day = "Tuesday"
			break;
		case 3:
			day = "Wednesday"
			break;
		case 4:
			day = "Thursday"
			break;
		case 5:
			day = "Friday"
			break;
		case 6:
			day = "Saturday"
			break;
		default:
			day = "X"
	}
	return (
		// <div className="calendar__box" style={{ color: data.color, backgroundColor: data.backgroundColor }}>
		<div className="calendar__box" >
			<div className="calendar__box-day">
				<span>{day}</span>
				<span>
					{`${data.date.getDate()}`.length == 1 ? `0${data.date.getDate()}` : data.date.getDate()}.
					{`${data.date.getMonth() + 1}`.length == 1 ? `0${data.date.getMonth() + 1}` : data.date.getMonth() + 1}.
					{data.date.getFullYear()}
				</span>
			</div>
			<div>
				<br />
				{data?.tasks.map((e, i) => (
					// <div key={i} style={{ color: e.color, fontSize: "0.7rem", textAlign: "left" }}> {e.title} </div>
					<div key={i} style={{ fontSize: "0.7em" }}> {e.title} </div>
				))}
			</div>
		</div>
	)
}

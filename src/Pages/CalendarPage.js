import React, { useEffect, useState } from 'react'
import Calendar from '../components/Calendar/Calendar';
import "./CSS/CalendarPage.css"
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CalendarModal from '../components/CalendarModal/CalendarModal';
export default function CalendarPage() {

	const _DATE = new Date();
	const [calendarData, setCalendarData] = useState([])
	const [currentMonth, setCurrentMonth] = useState(_DATE.getMonth())

	const [showModal, setShowModal] = useState(false); 
	const [modalInfo, setModalInfo] = useState({}); 

	const modalCallback = e => {
		if(e !== null){
			// returned data, do something with it
			console.log('returned', e)
			let tmp = [...calendarData]
			calendarData.filter(i=>i.date.getDate() == e.date.getDate())[0].tasks.push({
				title:`${e.title}`, 
				description: e.description,
				color: e.color 
			})
			setCalendarData(tmp);
			console.log(calendarData.filter(i=>i.date.getDate() == e.date.getDate())[0])
		}
		setShowModal(false);
	}

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
					color: "#333",
					backgroundColor: "#eaeaea",
					tasks: [
						// {
						// 	title: `• Do something ${-count + i + 1}`,
						// 	color: '#333',
						// },
						// {
						// 	title: `• Do something ${i}`,
						// 	color: '#333',
						// },
					]
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
				color: "#333",
				backgroundColor: "#eaeaea",
				tasks: [
					{
						title: `Do something ${i}`,
						description: `Blah blah ${i+1}`,
						color: '#333',
					},
					{
						title: `Do something else ${i}`,
						description: `Blah blah ${i + 1}`,
						color: '#333',
					},
				]
			}
			if (d.getDate() === _DATE.getDate() && d.getMonth() === _DATE.getMonth() && d.getFullYear() === _DATE.getFullYear()) {
				newItem.backgroundColor = "whitesmoke";
				// current day
			}
			nCalendar.push(newItem)
		}

		setCalendarData(nCalendar);
	}, [currentMonth])

	const handleShowModal = e => {
		setShowModal(true);
		setModalInfo(e);
	}

	const showCalendarRows = () => {
		return calendarData.map((e, i) => (
      <div key={i} onClick={()=>handleShowModal(e)} className="calendar__box">
        <Calendar data={e}  />
      </div>
    ));
	}

	return (
    <div className="calendar__wrapper">
      <IconButton
        type="button"
        onClick={() => setCurrentMonth(currentMonth - 1)}
      >
        <ArrowBackIcon className="calendar__button"/>
      </IconButton>
      <IconButton
        type="button"
        onClick={() => setCurrentMonth(currentMonth + 1)}
      >
        <ArrowForwardIcon className="calendar__button"/>
      </IconButton>
      <span style={{ color: "#eaeaea" }}>Current month {currentMonth + 1}</span>
      <div className="calendar">{showCalendarRows()}</div>
			<CalendarModal show={showModal} cb={modalCallback}/>
    </div>
  );
}

import React from 'react';


export const parseDate = date => {
	// 2017-05-24T10:30
	if (!date) {
		date = new Date();
	}
	let year = date.getFullYear();
	let month = (date.getMonth() + 1).toString().length == 1 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
	let day = (date.getDate()).toString().length == 1 ? `0${date.getDate()}` : `${date.getDate()}`;
	let hour = "10"
	let minute = "00"


	return `${year}-${month}-${day}T${hour}:${minute}`
}

export const reverseDate = d => {
	// 2017-05-24T10:30


	let year = d.slice(0, 4);
	let month = parseInt(d.slice(5, 7)) - 1;
	let day = d.slice(8, 10);
	let hour = d.slice(11, 13);
	let minute = d.slice(14);

	let _d = new Date();
	_d.setYear(year);
	_d.setMonth(month);
	_d.setDate(day);
	_d.setHours(hour);
	_d.setMinutes(minute);

	return _d;

}

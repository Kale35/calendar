import React, { useState, useRef} from 'react'
import CloseIcon from '@material-ui/icons/Close';
import {IconButton, TextField, Button, TextareaAutosize} from '@material-ui/core';
import { parseDate, reverseDate} from '../DateUtils/DateUtils';
import ColorPicker from 'material-ui-color-picker'

import './CalendarModal.css'
 

export default function CalendarModal({show,cb,date}) { 
	
	const dateRef = useRef(null)
	const titleRef = useRef(null)
	const descriptionRef = useRef(null)


	const styleTmp = {
		display: "none"
	}
		
	const handleClose = type => {
		// close stuff 
		// setShow(!show);
		if(type == 1){ // close
			cb(null)
		}
		else if(type == 2){ // save
			cb({
				date: reverseDate(dateRef.current.value), 
				title: titleRef.current.value,
				description: descriptionRef.current.value,
				color: "green"
			})   
		}
	}

	return (
    <div
      style={show ? null : styleTmp}
      className="calendarModal"
      onClick={() => handleClose(1)}
    >
      <div
        className="calendarModal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="calendarModal__header">
          <h1>NEW REMINDER</h1>
          <IconButton onClick={() => handleClose(1)}>
            <CloseIcon />
          </IconButton>
        </div>
        <form
          className="calendarModal__form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="calendarModal__inputDiv">
            <TextField
              inputRef={titleRef}
              multiline
              variant="outlined"
              label="Reminder Title"
              rowsMax={2}
            ></TextField>
          </div>
          <div className="calendarModal__inputDiv">
            <TextField
              inputRef={descriptionRef}
              multiline
              label="Reminder Description"
              variant="outlined"
              rows={5}
            />
          </div>

          <div className="calendarModal__inputDiv">
            <TextField
              inputRef={dateRef}
              id="date"
              type="datetime-local"
              // defaultValue="2017-05-24T10:30"
              defaultValue={parseDate()}
              onChange={(e) => console.log(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <ColorPicker
            name="color"
            defaultValue="#000"
            // value={this.state.color} - for controlled component
            onChange={(color) => console.log(color)}
          />
          <div className="calendarModal__buttonDiv">
            <Button
              className="calendarModal__button"
              type="submit"
              variant="contained"
              color="primary"
              onClick={
                () => 
                  handleClose(2)
              }
            >
              CONFIRM
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

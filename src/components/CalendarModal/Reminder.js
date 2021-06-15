import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { IconButton } from '@material-ui/core';
import './Reminder.css';

function Reminder() {
    return (
        <div className="reminder">
            <FiberManualRecordIcon className="reminder__color"/>
            <h2>This is a reminder</h2>
            <div className="reminder__delete">
                <IconButton>
                    <DeleteOutlineIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Reminder

import React from 'react'

export const CalendarEvent = ({ event }) => {

    const { title, user } = event;

    return (
        <div>
            <strong> {title} </strong>
            <span style={{ fontSize: '12px' }}> - {user.name} </span>
        </div>
    )
}

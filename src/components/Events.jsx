import React from 'react'
import "./Events.css"
import eventsMusic from "../assets/events-music.png"
import eventsFineArts from "../assets/events-fine-arts.png"
import eventsTheatre from "../assets/events-theatre.png"
import eventsDance from "../assets/events-dance.png"
import eventsLiterary from "../assets/events-literary.png"

export const Events = () => {
  return (
    <div className='events-container'>
      <h1>EVENTS</h1>
      <div>
        <div className="events-item">
          <img src={eventsMusic} alt="Music" />
          <h6>Music</h6>
        </div>
        <div className="events-item">
          <img src={eventsFineArts} alt="Music" />
          <h6>Fine Arts</h6>
        </div>
        <div className="events-item">
          <img src={eventsTheatre} alt="Music" />
          <h6>Theatre</h6>
        </div>
        <div className="events-item">
          <img src={eventsDance} alt="Music" />
          <h6>Dance</h6>
        </div>
        <div className="events-item">
          <img src={eventsLiterary} alt="Music" />
          <h6>Literary</h6>
        </div>
      </div>
    </div>
  )
}

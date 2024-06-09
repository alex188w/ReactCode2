function EventCard( {name, date, location }) {
    return ( 
        <div className="eventCard">
            <h2>Мероприятие: {name}</h2>
            <h2>Время: {date}</h2>
            <h2>Место проведения: {location}</h2>
        </div>
        
     );
}

export default EventCard;
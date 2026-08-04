function EventsList({ events }) {
  return (
    <div className="events_list">
      <h1>All Events</h1>
      <ul className="elist">
        {events.map((event) => (
          <li key={event.id} className="eitem">
            <a href="...">
              <img src={event.image} alt={event.title} />
              <div className="econtent">
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;

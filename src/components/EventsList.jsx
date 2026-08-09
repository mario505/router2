import { Link } from "react-router-dom";

function EventsList({ events }) {
  return (
    <div className="events_list">
      <h1>All Events</h1>
      <ul className="elist">
        {events.map((event) => (
          <li key={event.id} className="eitem">
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className="econtent">
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;

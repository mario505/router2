import { NavLink } from "react-router-dom";

function EventsNavigation() {
  return (
    <header className="enav_header">
      <nav>
        <ul className="enav_list">
          <li>
            <NavLink to="/events" end>
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/events/new">New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;

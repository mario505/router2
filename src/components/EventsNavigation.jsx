function EventsNavigation() {
  return (
    <header className="enav_header">
      <nav>
        <ul className="enav_list">
          <li>
            <a href="/events">All Events</a>
          </li>
          <li>
            <a href="/events/new">New Event</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;

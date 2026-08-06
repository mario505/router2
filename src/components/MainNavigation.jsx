import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className="mnav_header">
      <nav>
        <ul className="mnav_list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

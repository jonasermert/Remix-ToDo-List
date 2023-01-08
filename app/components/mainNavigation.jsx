import { NavLink} from "@remix-run/react";

function mainNavigation() {
    return (
        <nav id="main-navigation">
            <ul>
                <li className="nav-item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/notes">My Notes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default mainNavigation;
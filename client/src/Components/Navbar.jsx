import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { user, isloggedIn} = useAuth();

  return (
    <>
      <header>
        <div className="container navbar">
          <div className="logo-brand">
            <NavLink to="/">Solo-Tech</NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>
              {user?.is_Admin && (
                <li>
                  <NavLink to="/admin">Admin</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/about"> About</NavLink>
              </li>
              <li>
                <NavLink to="/service"> Service</NavLink>
              </li>
              <li>
                <NavLink to="/contact"> Contact</NavLink>
              </li>
              {isloggedIn ? (
                <li>
                  <NavLink to="/logout"> Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register"> Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login"> Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
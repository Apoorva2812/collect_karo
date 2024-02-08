import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const Navbar = () => {
  const { isAuth, logoutHandler } = useAuth();
  const handleClick = () => {
    // Redirect to the profile page
    window.location.href = "/profile1";
  };
  const handleClickorder = () => {
    // Redirect to the profile page
    window.location.href = "/orderprofile";
  };
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-brand">
        COLLECT KARO
      </Link>
      <button onClick={handleClick}>Profile</button>
      <button onClick={handleClickorder}>OrderProfile</button>
      <div className="nav-action">
        {isAuth ? (
          <Link to="/profile" className="icon profile" title="Profile">
            <i className="fa-solid fa-user"></i>
          </Link>
        ) : (
          <Link to="/login" className="icon login" title="Login">
            <i className="fa-solid fa-sign-in"></i>
          </Link>
        )}
      </div>
    </nav>
  );
};

export { Navbar };

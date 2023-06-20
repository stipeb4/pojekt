import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div className="navbar">
        <div className="logo">
          <h1>gušt</h1>
        </div>
        <div className="nav-links">
            <Link to="/">
                <a href="#pocetna">početna</a>
            </Link>
            <Link to="/onama">
                <a href="#pocetna">o nama</a>
            </Link>
            <Link to="/kontakt">
                <a href="#pocetna">kontakt</a>
            </Link>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  
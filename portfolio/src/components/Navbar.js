import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import React from 'react'; 
import "../App.css"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#1E2D3D" }}>
    <a className="navbar-brand text-white mx-3" role='button' href="http://localhost:3000/">KARUNA PAWAR</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active text-white" role='button' aria-current="page">Home</a>
        <a className="nav-link text-white" role='button'>About Me</a>
        <a className="nav-link text-white" role='button'>My Projects</a>
        <a className="nav-link text-white" role='button'>Contact Me</a>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;

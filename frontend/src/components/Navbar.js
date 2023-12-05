// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/a">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/a">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/a">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="/a" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="/a">Action</a></li>
//             <li><a className="dropdown-item" href="/a">Another action</a></li>
//             {/* <li><hr className="dropdown-divider"></li> */}
//             <li><a className="dropdown-item" href="/a">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" aria-disabled="true" href="/a">Disabled</a>
//         </li>
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//   );
// };

// export default Navbar;



import React from "react";
import { Link } from "react-router-dom";
// import './navbar.css';

const Navbar = () => {
  return (
    // <header>
      <nav className="navbar navbar-expand-lg">
      <style>
        {`
          .nav-title{
            color: #F5F5F5;
            font-size: 24px;
            font-weight: 700;
            line-height: 36px;
            letter-spacing: 0.04em;
          }
          .nav-white > .nav-link {
            color: #F5F5F5;
            line-height: 36px;
            letter-spacing: 0.04em;
          }

          .nav-white > .nav-link::after {
            border-color: #F5F5F5;
          }

          .nav-white > .nav-link.active {
            font-weight: bold;
            text-decoration: underline;
            color: #F5F5F5;
          }
        `}
      </style>
        <div className="navbar-inner container">
          <Link className="navbar-brand nav-title" style={{  color: '#F5F5F5', fontSize: '24px' }} to="/">Brain.py</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="nav-white navbar-nav ms-auto ">
              <Link className="nav-link active" to="/">Home</Link>
              <Link className="nav-link" to="/si-sadar">buat yang sadar</Link>
              <Link className="nav-link" to="/si-clueless">buat si clueless</Link>
              <Link className="nav-link" to="/what-n-how">What n How?</Link>
            </div>
          </div>
        </div>
      </nav>
    // </header>
  );
};

export default Navbar;


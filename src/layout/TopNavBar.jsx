// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <img
//         src="//cdnm.myracehorse.com/wp-content/themes/myracehorse/images/logo_black.png"
//         alt="MyRaceHorse"
//       />
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         {" "}
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">
//               Buy
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Stable
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Updates
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Perks
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Reviews
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               FAQ
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand order-0" to="/">
          <img
            src="//cdnm.myracehorse.com/wp-content/themes/myracehorse/images/logo_black.png"
            alt="MyRaceHorse"
          />
        </Link>
        
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler order-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navigation Content */}
        <div className="collapse navbar-collapse order-last order-lg-0" id="navbarContent">
          {/* Left side menu items */}
          <ul className="navbar-nav left-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/buy">Buy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stable">Stable</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/updates">Updates</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/perks">Perks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reviews">Reviews</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">FAQ</Link>
            </li>
          </ul>
          
          {/* Right side menu items */}
          <ul className="navbar-nav right-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/account">Account</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-horses">My Horses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experiences">Experiences</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/merchandise">Merchandise</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link login-link" to="/login">LOG IN</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link signup-btn" to="/signup">SIGN UP</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
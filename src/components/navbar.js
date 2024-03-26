// OBJECTIVE: handles render of the navigation bar at the top, set routes for pages when buttons are clicked

import { Link, Route, Routes } from "react-router-dom";
import Home from "./home";
import Guide from "./guide";

import DiscoveriesPost from "./discoveries";

function Navbar() {
  return (
    <>
      <div className="nav-menu">
        <button className="nav-buttons">
          <Link to="/">About</Link>
        </button>
        <button className="nav-buttons">
          <Link to="/guide">The Guide</Link>
        </button>
        <button className="nav-buttons">
          <Link to="/discoveries">Discoveries</Link>
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/discoveries" element={<DiscoveriesPost />} />

        {/* any pages/comp added routes need to be added here */}
      </Routes>
    </>
  );
}
export default Navbar;

import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.js";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png"
      />
      <SidebarOption title="Home" />
      <SidebarOption title="Search" />
      <SidebarOption title="Your library" />
    </div>
  );
}

export default Sidebar;

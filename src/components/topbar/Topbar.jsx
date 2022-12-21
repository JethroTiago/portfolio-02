import React from "react";
import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

export default function topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar" + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">jethro</a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+55 71 99296-9091</span>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>jethrotiago@hotmail.com</span>
          </div>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
import "./topbar.scss"
import {Person, Mail} from "material-ui"

export default function topbar() {
  return (
    <div className="topbar active">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">jethro</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+55 71 99296-9091</span>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>jethrotiago@hotmail.com</span>
          </div>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
import "./topbar.scss"
import {Person, Mail} from "material-ui"

export default function topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">jethro</a>
          <div className="itemContainer">

          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}
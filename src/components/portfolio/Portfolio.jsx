import React from "react";
import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>SASS</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}

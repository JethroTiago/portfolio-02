import React from "react";
import "./intro.scss";
import { init } from 'ityped'

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Jethro-Avatar.jpg" alt="Imagem do Jethro" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá, galera!</h2>
          <h1>Jethro Tiago</h1>
          <h3>Desenvolvedor <span>Front-End</span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="Seta pra baixo" />
        </a>
      </div>
    </div>
  )
}
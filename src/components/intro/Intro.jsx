import React from "react";
import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Front-End'] })
  },[]);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Jethro-Avatar.png" alt="Imagem do Jethro" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá, galera!</h2>
          <h1>Jethro Tiago</h1>
          <h3>Desenvolvedor <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="Seta pra baixo" />
        </a>
      </div>
    </div>
  )
}
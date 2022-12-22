import React from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"

export default function Portfolio() {
  const [selected,setSelected] = useState("featured");
  const list = [
    {
      id: "react",
      title: "React",
    },
    {
      id: "html",
      title: "HTML",
    },
    {
      id: "css",
      title: "CSS",
    },
    {
      id: "bootstrap",
      title: "Bootstrap",
    },
    {
      id: "sass",
      title: "Sass",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item=>(
          <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img 
            src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/zRVheeFjiQQHGCo6ZbDgoZkq" 
            alt="" 
          />
          <h3>REACT</h3>
        </div>
        <div className="item">
          <img 
            src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/zRVheeFjiQQHGCo6ZbDgoZkq" 
            alt="" 
          />
          <h3>REACT</h3>
        </div>
        <div className="item">
          <img 
            src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/zRVheeFjiQQHGCo6ZbDgoZkq" 
            alt="" 
          />
          <h3>REACT</h3>
        </div>
        <div className="item">
          <img 
            src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/zRVheeFjiQQHGCo6ZbDgoZkq" 
            alt="" 
          />
          <h3>REACT</h3>
        </div>
      </div>
    </div>
  )
}

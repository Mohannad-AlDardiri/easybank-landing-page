import React from 'react'
import AdvantagesCardsObg  from "./AdvantagesCardsObg";

const Cards = () => {
    return (
            
      AdvantagesCardsObg.map((el) => 
          <div className="card-container" key={el.id}>
            <div className="card-img">
              <img src={el.img} alt={el.imgAlt} />
            </div>
            <h3>{el.title}</h3>
            <p>{el.parg}</p>
          </div>
      )
    )
}

export default Cards

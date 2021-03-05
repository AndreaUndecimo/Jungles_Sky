import React from "react"
import "./Body.css"

const Body = () => {
  return (
    <div className="main_container mosaic">
      <div className="card_offer">
        <div className="mosaic_image">
          <img
            src="https://static.sky.it/images/skyit/ext/mcs/offerte/card/mosaico-configuratore.jpg"
            alt="mosaic_sky"
          />
        </div>
        <div className="offer_card_text">
          <div className="offer_info">
            <h2>
              Crea la tua offerta <strong>a partire da 14,90€</strong>
            </h2>
            <p>
              Scopri pacchetti e servizi più adatti alle tue esigenze, in
              completa autonomia.
            </p>
          </div>
          <div className="card_btn">
            <button className="btn btn-white">Configura</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body

import React from "react"
import "./Body.css"

// * Icons
import { ReactComponent as Arrow } from "../../assets/arrow.svg"

const Body = () => {
  return (
    <div className="main_container body">
      <div className="mosaic">
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
            <button className="btn btn-white-bg">Configura</button>
          </div>
        </div>
      </div>
      <div className="title_viaggio">
        <h2>Inizia il tuo viaggio nel mondo Sky.</h2>
      </div>
      <div className="viaggi">
        <div className="viaggi_card_text">
          <div className="viaggi_info">
            <p className="text_sky_gradient">Sky Q</p>
            <p className="regular">
              Tutto quello che ami in un unico posto, facile.
            </p>
            <div className="scopri_tv_wrapper">
              <a href="/" className="scopri_tv">
                <p>Scopri la TV di Sky</p>
              </a>
              <Arrow />
            </div>
          </div>
          <div class="content-img">
            <picture>
              <source
                media="(min-width: 769px)"
                data-srcset="https://static.sky.it/images/skyit/ext/mcs/index/box/tv-marzo-md.jpg"
                srcset="https://static.sky.it/images/skyit/ext/mcs/index/box/tv-marzo-md.jpg"
              />
              <source
                media="(min-width: 456px)"
                data-srcset="https://static.sky.it/images/skyit/ext/mcs/index/box/tv-marzo-sm.jpg"
                srcset="https://static.sky.it/images/skyit/ext/mcs/index/box/tv-marzo-sm.jpg"
              />
              <source
                media="(min-width: 320px)"
                data-srcset="https://static.sky.it/images/skyit/ext/mcs/index/box/tv-marzo-xs.jpg"
                srcset="https://static.sky.it/images/skyit/ext/mcs/index/box/tv-marzo-xs.jpg"
              />
              <img
                class="lazy loaded"
                data-src="https://static.sky.it/images/skyit/ext/mcs/index/box/tv-marzo-sm_low.jpg"
                src="https://static.sky.it/images/skyit/ext/mcs/index/box/tv-marzo-sm_low.jpg"
                data-was-processed="true"
                alt="Sky selection"
              />
            </picture>
          </div>
          <div className="viaggi_btn">
            <button className="btn btn-blue-bg">Configura</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body

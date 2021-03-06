import React from "react"

//  * Icons
import { ReactComponent as Check } from "../../assets/check.svg"
import { ReactComponent as Arrow } from "../../assets/arrow.svg"

// ** Swiper modules
import "./SwipableHeader.css"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const SwipableHeader = () => {
  return (
    <div className="header_home">
      <Swiper slidesPerView={1} pagination={{ clickable: true }}>
        <SwiperSlide>
          <div className="header_wrap">
            <div className="header_home_title">
              <picture class="logo-lg">
                <source
                  media="(min-width: 769px)"
                  data-srcset="https://static.sky.it/images/skyit/ext/mcs/index/skyq.png"
                  srcset="https://static.sky.it/images/skyit/ext/mcs/index/skyq.png"
                />
                <source
                  media="(min-width: 456px)"
                  data-srcset="https://static.sky.it/images/skyit/ext/mcs/index/skyq.png"
                  srcset="https://static.sky.it/images/skyit/ext/mcs/index/skyq.png"
                />
                <source
                  media="(min-width: 320px)"
                  data-srcset="https://static.sky.it/images/skyit/ext/mcs/index/skyq.png"
                  srcset="https://static.sky.it/images/skyit/ext/mcs/index/skyq.png"
                />
                <img class="skyq_logo" alt="Sky Q Logo" />
              </picture>
              <h2 className="title-color">Prova Sky Q e non pensarci più.</h2>
              <p>
                Da oggi puoi provare Sky&nbsp;TV, Netflix, Sky&nbsp;Cinema,
                Sky&nbsp;Sport e Sky&nbsp;Kids per 30 giorni. E dopo la prova
                sei libero di decidere: ti abboni o ridai Sky&nbsp;Q.
              </p>
              <button className="btn btn-blue">Scopri di più</button>
            </div>
            <div className="image_cover">
              <img
                className="cover_image"
                src="https://static.sky.it/images/skyit/ext/mcs/index/visori-offerte/provaskyq-xs.jpg"
                alt="Sky Q"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header_wrap">
            <div className="wrapper_locandina">
              <img
                className="movie_locandina"
                src="https://static.sky.it/images/skyit/ext/mcs/tv/sky-cinema/visore-ht-xs.jpg"
                alt="movie_locandina"
              />
            </div>
            <div className="header_home_title slide-2">
              <h2 className="gradient_title">Pacchetto Sky Cinema</h2>
              <p>Il film giusto per ogni gusto</p>
              <ul className="cinema_list">
                <li>
                  <Check />
                  <p>Il cinema di Sky e Premium</p>
                </li>
                <li>
                  <Check />
                  <p>Tutto da vedere come e quando vuoi</p>
                </li>
              </ul>
              <h2 className="gradient_title sky_cinema_title">
                NOVITÀ. PROVA SKY&nbsp;Q CON SKY&nbsp;TV, NETFLIX,
                SKY&nbsp;CINEMA, SKY&nbsp;SPORT E&nbsp;SKY KIDS
              </h2>
              <div className="offer">
                <div className="price_main">
                  <div className="price">
                    <span className="price_big">9</span>
                    <div className="price_side">
                      <span className="price_cents">
                        ,00
                        <span>€</span>
                      </span>
                      <span className="price_date">per 30 giorni</span>
                    </div>
                  </div>
                  <button className="btn btn-blue-dark">
                    Scopri l'offerta
                  </button>
                  <div className="configure_link">
                    <a href="/">Configura</a>
                    <Arrow />
                  </div>
                </div>
              </div>
              <div className="configure">
                <p>
                  <strong>oppure crea la tua offerta in autonomia.</strong>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwipableHeader

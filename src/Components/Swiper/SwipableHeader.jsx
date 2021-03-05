import React from "react"

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
              <h2 className="title-color">
                Nuove. Imperdibili. Per te.
                <br />
                Preparati a un 2021 di serie&nbsp;TV.
              </h2>
              <button className="btn btn-blue-dark">Scopri di più</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwipableHeader

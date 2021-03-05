import React, { useState } from "react"
import "./Navbar.css"
import { ReactComponent as UserIcon } from "../../assets/account.svg"
import { ReactComponent as Arrow } from "../../assets/arrow.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    const header_wrapper = document.querySelector(".header_wrapper")

    isOpen
      ? header_wrapper.classList.add("open_menu")
      : header_wrapper.classList.remove("open_menu")

    setIsOpen(!isOpen)
  }

  return (
    <div className="navbar_wrapper">
      <div className="navbar_flex">
        <div className="navbar_left">
          <div className="left_menu">
            <div className="burger_menu" onClick={toggleMenu}>
              <span></span>
            </div>
            <div className="hidden_menu">
              <div className="menu_list">
                <ul>
                  <li>
                    <a href="/">Pacchetti TV</a>
                    <Arrow />
                  </li>
                  <li>
                    <a href="/">Sky Q</a>
                    <Arrow />
                  </li>
                  <li>
                    <a href="/">Sky Wifi</a>
                    <Arrow />
                  </li>
                  <li>
                    <a href="/">Extra</a>
                    <Arrow />
                  </li>
                  <li>
                    <a href="/">Assistenza</a>
                    <Arrow />
                  </li>
                  <li>
                    <a href="/">Fai da te</a>
                    <Arrow />
                  </li>
                </ul>
              </div>
            </div>
            <div className="sky_logo">
              <img
                class="sky-logo-image"
                alt="Sky Italia logo"
                src="https://images.contentstack.io/v3/assets/blta6c52b9cd5519be3/blt359ac09d856638c8/5f6853c7d70e764f32921c7c/Logo_spectrum.png"
              ></img>
            </div>
          </div>
        </div>
        <div className="right_menu">
          <div className="user">
            <UserIcon />
            <p>Login</p>
          </div>
          <div className="offer_btn">
            <button className="btn">
              <div className="label">Offerte</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

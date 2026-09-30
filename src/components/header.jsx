import React from 'react'
import '../styles/header.css'

import barsIcon from '../assets/icons/bars-solid-full.svg'
import searchIcon from '../assets/icons/magnifying-glass-solid-full.svg'
import cameraIcon from '../assets/icons/camera-solid-full.svg'
import boxIcon from '../assets/icons/box-solid-full.svg'
import heartIcon from '../assets/icons/heart-regular-full.svg'
import cartIcon from '../assets/icons/cart-shopping-solid-full.svg'
import userIcon from '../assets/icons/user-regular-full.svg'

export default function Header() {
  return (
    <header className="ozon-header">
      <div className="header_top">
        <div className="header_top_inner">
          <div className="logo">OZON</div>

          <button className="catalog_btn">
            <img src={barsIcon} alt="menu" className="icon icon-white" />
            Katalog
          </button>

          <div className="search_box">
            <select className="search_select">
              <option>Hamma joyda</option>
            </select>
            <input type="text" placeholder="Ozonda qidirish" />
            <button className="search_cam_btn">
              <img src={cameraIcon} alt="camera" className="icon" />
            </button>
            <button className="search_btn">
              <img src={searchIcon} alt="search" className="icon icon-white" />
            </button>
          </div>

          <div className="header_actions">
            <div className="action_item">
              <img src={userIcon} alt="user" className="icon" />
              <p>Kirish</p>
            </div>
            <div className="action_item">
              <img src={boxIcon} alt="orders" className="icon" />
              <p>Buyurtmalar</p>
            </div>
            <div className="action_item">
              <img src={heartIcon} alt="favorites" className="icon" />
              <p>Sevimlilar</p>
            </div>
            <div className="action_item">
              <img src={cartIcon} alt="cart" className="icon" />
              <p>Savat</p>
            </div>
          </div>
        </div>
      </div>

      <nav className="header_nav">
        <div className="header_nav_inner">
          <ul>
            <li>Tez yetkazib berish</li>
            <li>Elektronika</li>
            <li>Bolalar tovarlari</li>
            <li>Kitoblar</li>
            <li>Xobbi va ijod</li>
            <li>Uy va bog'</li>
            <li>Sport va hordiq</li>
            <li>Sotuvchi bo'lish</li>
          </ul>
          <div className="header_nav_right">
            <span>Toshkent</span>
            <a href="#">Manzilni ko'rsating</a>
            <span className="lang">
              <img src="https://flagcdn.com/w20/uz.png" alt="UZ" className="flag_icon" />
              UZ
            </span>
          </div>
        </div>
      </nav>

    </header>
  )
}
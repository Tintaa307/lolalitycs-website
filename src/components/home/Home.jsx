import React from 'react'
import './home.css'
import Top from '../../assets/img/Top.png'
import Jungla from '../../assets/img/Jungla.png'
import Mid from '../../assets/img/mid.png'
import Adc from '../../assets/img/bot.png'
import Support from '../../assets/img/Support.png'
import champions from 'lol-champions'

const Home = () => {
  return (
    <section className="section-home">
      <div className="container-home">
        <div className="container-items">
          {
            champions.map(({ id, title, icon }, key) => {
              return (
                <div key={key} className="item">
                  <h1>{id}</h1>
                  <img src={icon} alt="" />
                  <h3>{title}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Home

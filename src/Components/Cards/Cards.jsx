import React from 'react'
import style from './Cards.module.css'

function Cards(data) {
  return (
    
    <div className={style.wrap} >
      <div className={style.cartWrap}>
        <div className={style.cart}>
          <div className={style.front}>
            
            <img src={data.img} alt={data.title} />
          </div>
          <div className={style.back} >
          <h3>{data.title} </h3>
          <div className={style.containerbtn}>
          <a className={style.an}  href="https://github.com/landeros31/Fifty-Challenges-JavaScript/tree/main/docs"> <button className={style.button}>GitHub </button> </a>
          <a className={style.an} href={data.github}> <button className={style.button}>Test it </button> </a>
          </div>
              
          </div>

        </div>

      </div>

    </div>
    
  )
}

export default Cards

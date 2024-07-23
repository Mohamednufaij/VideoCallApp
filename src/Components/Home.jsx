import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./home.module.css"
const Home = () => {
    const [value,setValue]=useState()
    const navigate=useNavigate()
    const handlejoin=useCallback(()=>{
        navigate(`/room/${value}`)
    },[navigate,value])

    
  return (
    <div className={style.main}>
      
      <div className={style.box}>
      <div className={style.heading}>Video Call App</div>
      <div className={style.instruction}>Please enter your code below to start the video call.</div>
          <input className={style.input} value={value} onChange={e=>{setValue(e.target.value)}} type='text' placeholder='Enter room code'></input>
          <button className={style.button} onClick={handlejoin}>Join</button>
      </div>
      </div>
      
  )
}

export default Home

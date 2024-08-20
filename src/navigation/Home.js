import React, { useEffect } from 'react'
import './Home.css'
import Togg from './Togg'
import {Cob} from './Cob'
import { useState } from 'react'

const Home = () => {
 
  const [Theme,setTheme]=useState(".light")

  function lightT() {
    setTheme(".light")
  }
  function darkT() {
    setTheme(".dark")
  }


  return (
    <Cob.Provider value={{Theme,lightT,darkT}}>
    <div className='container'>
      
      <div className='navi'>

       
        <div className='log'><img src="log.png" alt="loading"  style={{height:'35px'}}/>
        <h1>HIVE</h1>
        </div>
  

        <div className='search'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>

            <input type="text" placeholder='Search Here' id='input'/>
            <Togg></Togg>
        </div>
       
      </div>

    </div>
    </Cob.Provider>
  )
}

export default Home
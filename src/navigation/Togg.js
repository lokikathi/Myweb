import React, { useContext } from 'react'
import './Togg.css'
import { Cob } from './Cob'

const Togg = () => {
  const {Theme,darkT,lightT}=useContext(Cob)
  return (
    <div>
       
         <label class="switch">
         <input type="checkbox" onClick={Theme == lightT ?(darkT):(lightT)} />
         <span class="slider round"></span>
         </label>

    </div>
  )
}

export default Togg
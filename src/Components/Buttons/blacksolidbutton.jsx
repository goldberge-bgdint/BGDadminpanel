import React from 'react'
import "../../index.scss"
import "./blacksolidbutton.scss"

function Blacksolidbutton(props) {
  return (
    <div>
        <button className='blacksolidbutton' > 
            {props.text}
        </button>
    </div>
  )
}

export default Blacksolidbutton
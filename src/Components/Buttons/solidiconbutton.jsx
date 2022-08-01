import React from 'react'
import "./solidiconbutton.scss"

function Solidiconbutton(props) {
  return (
    <div>

            <button className='solidiconbutton' > 
            <i class={props.icon}></i>
            </button>

    </div>
  )
}

export default Solidiconbutton
import React from 'react'
import "./Select.scss"

function Selectcomponent(props) {
  return (
    <div>
         <select id={props.optionid} onChange={props.onshowselect} class="form-select" aria-label="Default select example">
            {props.options.map((e)=>
                     <option selected>{e}</option>
            )}         
        </select>
    </div>
  )
}

export default Selectcomponent
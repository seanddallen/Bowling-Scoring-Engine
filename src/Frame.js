import React from 'react'

export const Frame = (props) => {
  
//   const disabled = props.children === "11" || props.children === "12" ? disabled : null

  return (
    <div className="row">
        <label>Frame {props.children}</label>
        <select id={props.children} className="frame">
            <option value="zero">0</option>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
            <option value="five">5</option>
            <option value="six">6</option>
            <option value="seven">7</option>
            <option value="eight">8</option>
            <option value="nine">9</option>
            {props.id === "11" || props.id === "12" ? null : <option value="spare">spare</option>}
            <option value="strike">strike</option>
        </select>
    </div>
  )
}

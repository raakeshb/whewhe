import React from 'react'
import Cash from './Cash'
const Cashcontainer = (props) => {
    return (
        <div style={{background:'#FFEBCD'}}>
            <p>Cash:</p>
            {props.cash.map((cas)=>(<Cash id={cas.id} value={cas.cash} CN={props.Cn}></Cash>))}
        </div>
    )
}

export default Cashcontainer


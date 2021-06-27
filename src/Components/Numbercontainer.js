import React from 'react'
import Numbers from './Numbers'
const Numbercontainer = (props) => {
    return (<div className="grid-container" style={{backgroundColor:'#FFEBCD'}}>
            {props.Numbers.map((num)=>(<Numbers id={num.id} value={num.value} color={num.color} NC={props.Nc} random={props.random} clear ={props.clear} cash={props.cash}></Numbers>))}
            </div>
    )
}

export default Numbercontainer

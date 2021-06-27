import React from 'react'
import Total from './Total'
const TotalContainer = (props) => {
    



    return (
        <div style={{backgroundColor:'#FFEBCD'}}>
        <p>Selected Numbers:</p>
            {props.Num.map((num)=>num.color === true ? (<Total key={num.id} value={num.value}></Total>):""   )}  
        <p>Total:</p>
            <p>${props.Cas}</p>
        </div>
    )
}

export default TotalContainer

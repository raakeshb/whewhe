import React from 'react'

const Cash = (props) => {
    return (
        <div>
            <button class="Cash" onClick={()=>{props.CN(props.id)}}>${props.value}</button>
        </div>
    )
}

export default Cash

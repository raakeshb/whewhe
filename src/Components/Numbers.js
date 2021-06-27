import React from 'react';
import '../App.css';
const Numbers = (props) => {
    if (props.id === 23) {
        return (<button className={props.color ? 'changed' : 'grid-item'} onClick={() => { props.random() }}>{props.value}</button>)
    }
    else if (props.id === 21) { return (<button className={props.color ? 'changed' : 'grid-item'} onClick={() => { props.clear() }}>{props.value}</button>) }
    else if (props.id === 22) { return (<button className={props.color ? 'changed' : 'grid-item'} onClick={() => { props.cash() }}>{props.value}</button>) } else {

        return (

            <button className={props.color ? 'changed' : 'grid-item'} onClick={() => { props.NC(props.id) }}>{props.value}</button>
        )
    }
}

export default Numbers

import React from 'react';
import ValidationComponent from '../ValidationComponent/ValidationComponent';

const CharComponent=(props)=>{
    const style={
        display: 'inline-block',
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
    }
        
    
    return(
     <div style={style} onClick={props.click}>
        <p>{props.letter}</p>
     </div>
    )
}

export default CharComponent;
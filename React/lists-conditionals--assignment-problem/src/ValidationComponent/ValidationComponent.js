import React from 'react';

const ValidationComponent = (props) =>{

    
    var suggestion=null;
    if(props.text!=null && props.text!=''){
        var text=props.text;
        if(text.length<5){
            suggestion="Text too short";
        }
        else{
            suggestion="Text long enough";
        }
    
    }
    
    return(
        <div>
            <h3>{suggestion}</h3>
        </div>
    )
}

export default ValidationComponent;
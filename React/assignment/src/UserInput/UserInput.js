import React from 'react';

const UserInput = (props) =>{
    return(
        <div>
            <input onChange={props.click} value={props.userName}/>

        </div>
    )
}

export default UserInput;
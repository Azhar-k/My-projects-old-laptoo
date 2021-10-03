import React from 'react';

const UserOutput=(props)=>{

    const divStyle={
        border:'1px solid black',
        backgroundColor:'grey',
        width:'500px',
        margin:'auto'
    };
    return(
        <div style={divStyle}>
            <p>The user name is</p>
            <p>{props.userName}</p>
        </div>
    )
}
export default UserOutput;
import React from 'react';

const withClass = (WrappComponent,className) =>{
    return props=>(
        <div className={className}>
            <WrappComponent {...props}/>
        </div>
    )
}

export default withClass;
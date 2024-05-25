import React from 'react';

const User=(props)=>{
    
    // const{data}=props
    return(
        <div className='App'>
<h1>user </h1>
<h3>{props.data.name}</h3>
        </div>
    )
}
export default User;
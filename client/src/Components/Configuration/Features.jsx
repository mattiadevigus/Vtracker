import React from 'react';

function Feauters(props) {
    return(
        <div className="col-4 display-4"><i className= {props.icon}></i> <h5>{props.title}</h5></div>
    )
    
}

export default Feauters
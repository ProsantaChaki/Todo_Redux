import React from "react";

import './addList.css'

const list = (props) =>(
    <div className='List' onClick={props.clicked}>
        <h2>{props.name}</h2>
    </div>
);

export default list;



import React from 'react';

const Printout = (props) => {

    console.log("Did it printout?");

    return (
        <div onClick={props.onClick}>
            <hr></hr>
            {props.name}
           
        </div>
    );
};

export default Printout;
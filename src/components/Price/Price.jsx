import React from 'react';

const Price = (props) => {
    return (
        <button onClick={props.calculate}>
            Calculate
        </button>
    );
};

export default Price;
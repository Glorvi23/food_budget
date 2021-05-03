import React from 'react';

const Budget = (props) => {
    return (
      <div>
        <br />
        Budget:
        <p>Please enter your price Max</p>
        <input
          type="text"
          id="budget"
          onChange={props.handleInputChange}
          value={props.budget}
        />
        <br />
        <br />
        <input type="button" onClick={props.submitBudget} />
      </div>
    );
};

export default Budget;
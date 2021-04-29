import React from "react";

const SearchForm = (props) => {
  return (
    <div>
      <br />
      Food Product:
      <input
        type="text"
        id="txtName"
        onChange={props.handleInputChange}
        value={props.results}
      />
      <br />
      <br />
      <input type="button" onClick={props.onSubmit} value="Submit" />
    </div>
  )
};

export default SearchForm;

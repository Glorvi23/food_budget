import React from "react";
import { useState } from "react";

const Price = () => {
  const [price, setPrice] = useState("");

  const handleInputChange = (event) => {
    setPrice(event.target.value);
    // var item = price.value;
    // Validate(item);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    //Regex to make sure there are no special characters
    var regex = /^[0-9]+$/;
    var isValid = regex.test(price);

    if (!isValid) {
      alert("Does not contain numbers.");
    } else {
      alert("Does contain numbers.");
    }

    return isValid;
  };

  return (
    <div>
      <br />
      Price of Product:
      <input
        type="text"
        id="txtPrice"
        onChange={handleInputChange}
        value={price}
      />
      <br />
      <br />
      <input type="button" onClick={onSubmit} value="Submit" />
    </div>
  );
};

export default Price;

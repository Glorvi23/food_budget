import React from "react";
import { useState } from "react";
import axios from "axios";
import SearchForm from "../../components/SearchForm/SearchForm";

const Validation = (props) => {
  const [name, setName] = useState("");
  const [foodResults, setFoodResults] = useState([]);

  var inputUser = "";
  // var foodResults = [];

  //API Search
  function Search() {
    if (!name) {
      console.log("returned Search: ", inputUser);
      return;
    }
    console.log("Something inputUser Search: ", inputUser);

    var baseUrl = "https://api.edamam.com/api/food-database/v2/parser?";
    // var inputUser = "red%20apple";
    var urlTest = `https://api.edamam.com/api/food-database/v2/parser?ingr=${inputUser}&app_id=d823b0f6&app_key=cf7cf549c140bc826c40ecd8134b4e9e`;
    // var queryUrl = (baseUrl += $.param(searchQuery));
    axios.get(urlTest).then((response) => {
      response.data.hints.map((results) => {
        console.log("Then Statement!!", results.food.label);
        setFoodResults(... foodResults, results.food.label);
      });
    });
    foodResults.map((response) => {
      console.log("foodResults: ", response);
    })
  }

  const handleInputChange = (event) => {
    setName(event.target.value);
    var item = name.value;
    // Validate(item);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");
    //Regex to make sure there are no special characters
    var regex = /^[A-Za-z0-9 ]+$/;
    var isValid = regex.test(name);

    // if (!isValid) {
    //   alert("Contains Special Characters.");
    // } else {
    //   alert("Does not contain Special Characters.");
    // }

    inputUser = name;
    Search(inputUser);

    return isValid;
  };

  return (
    <div>
      <SearchForm onSubmit={onSubmit} handleInputChange={handleInputChange} results={name} />
      <div>
        
      </div>
    </div>
  );
};

export default Validation;

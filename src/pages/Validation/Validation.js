import React from "react";
import { useState } from "react";
import axios from "axios";
import SearchForm from "../../components/SearchForm/SearchForm";
import Printout from "../../components/Printout/Printout";
import Price from "../../components/Price/Price";
import Budget from "../../components/Budget/Budget";

const Validation = (props) => {
  const [name, setName] = useState("");
  const [foodResults, setFoodResults] = useState([]);
  const [save, setSave] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [budget, setBudget] = useState();



  var inputUser = "";
  // var foodResults = [];

  //API Search
  function Search() {
    if (!name) {
      console.log("returned Search: ", inputUser);
      return;
    }

    // if (foodResults !== null) {
    //   setFoodResults([]);
    //   console.log("Emptied", foodResults);
    // }

    foodResults.length = 0;

    // for(let i=0; i<foodResults.length; )

    // foodResults.map((item) => {
    //   foodResults.pop();
    //   console.log("item", foodResults);
    // })

    console.log("Something inputUser Search: ", inputUser);

    var baseUrl = "https://api.edamam.com/api/food-database/v2/parser?";
    // var inputUser = "red%20apple";
    var urlTest = `https://api.edamam.com/api/food-database/v2/parser?ingr=${inputUser}&app_id=d823b0f6&app_key=cf7cf549c140bc826c40ecd8134b4e9e`;
    // var queryUrl = (baseUrl += $.param(searchQuery));
    axios.get(urlTest).then((response) => {
      response.data.hints.map((results) => {
        console.log("Then Statement!!", results.food.label);

        // <p>chocolate!</p>
        
        // console.log("Inside, Before parseINT", typeof foodResults);

        let foodItem = parseInt(results.food.label);

        // foodResults.pop();

        foodResults.push(results.food.label);

            console.log("foodResults: ", foodResults);


        // setFoodResults(...foodResults, results.food.label);

      });
    });
    // foodResults.map((response) => {
    //   console.log("foodResults: ", response);
    // })
  }

  const handleInputChange = (event) => {
    if(typeof(event.target.valuer) === 'number'){
      setBudget(event.target.value);
    }else{
      setName(event.target.value);
    }

    var item = name.value;
    // Validate(item);
  };

  const onSubmit = (event) => {
    
    event.preventDefault();
    console.log("Submitted!");
    //Regex to make sure there are no special characters
    var regex = /^[A-Za-z0-9 ]+$/;
    var isValid = regex.test(name);

    if (!isValid) {
      alert("Contains Special Characters.");
    } else {
      alert("Does not contain Special Characters.");
    }

    if(typeof(event.target.value) === 'number'){
      setBudget(event.target.value);
      console.log('budget', budget);
    }else{
      inputUser = name;
      Search(inputUser);
    }


    return isValid;
  };

    // const submitBudget = (event) => {
    //   event.preventDefault();
    //   console.log("Submitted!");
    //   //Regex to make sure there are no special characters
    //   var regex = /^[A-Za-z0-9 ]+$/;
    //   var isValid = regex.test(name);

    //   if (!isValid) {
    //     alert("Contains Special Characters.");
    //   } else {
    //     alert("Does not contain Special Characters.");
    //   }

    //     setBudget(event.target.value);
    //     console.log("budget", budget);


    //   return isValid;
    // };

  console.log("OUTSIDE", typeof foodResults);

  // const arr = ["chocolate", "broccli"];

  console.log("arr typeof: ", typeof(arr));


  const onClick = (event) => {
    // setSave(...save, event.target.value);
    let hold = event.target.innerText;
    save.push(hold);
    console.log("Saved!: ", save);
  }

  const calculate = (event) => {
    let totalList = save.length;
    setTotalPrice(totalList); 
    console.log("totalPrice: ", totalPrice);

  }

  // calculate();




  return (
    <div>
      <SearchForm
        onSubmit={onSubmit}
        handleInputChange={handleInputChange}
        results={name}
      />
      {/* <div>
        <Budget
          submitBudget={submitBudget}
          handleInputChange={handleInputChange}
          budget={budget}
        />
      </div> */}
      <div style={{ float: "left", margin: "2rem" }}>
        <div>
          <h3>Food Options:</h3>
          <p>Choose the items desired from the list below:</p>
        </div>
        {foodResults.map((item, index) => {
          return <Printout onClick={onClick} name={item} key={index} />;
        })}

        {/* {for(let i=0;i<foodResults.length; i++){
          <p>Bananas!</p>
        }} */}

        {/* {foodResults} */}

        {/* {arr.map((item) => {
          return <p>{item}</p>
        })} */}

        {/* <Printout name={name}/> */}
      </div>
      <div style={{ float: "right", margin: "2rem" }}>
        <div>
          <h3>Saved List:</h3>
        </div>
        {save.map((item, index) => {
          return <Printout onClick={onClick} name={item} key={index} />;
        })}
        {/* {save} */}
      </div>
      <div style={{ float: "right" }}>
        {/* <button>Calculate
        </button> */}
        <Price calculate={calculate} />
        <div>
          <h4>Total Price: ${totalPrice}.00</h4>
        </div>
      </div>
    </div>
  );
};

export default Validation;

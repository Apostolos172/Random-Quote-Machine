// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";

import QuoteBox from "./components/QuoteBox";

function App() {
  const [quote, setQuote] = useState("Lorem ipsum dolor sit amet, consectetur");
  const [author, setAuthor] = useState("nobody");

  useEffect(() => {
    let data = fetchQuote();
    // promiseB.then(function (result) {
    //   // here you can use the result of promiseB
    // });
    data.then(function (result) {
      // here you can use the result of promise data
      console.log(result);
      setQuote(result.content);
      setAuthor(result.author);
    });
    //console.log(data);
    //console.log(data.state);
    //console.log(typeof data);
  }, []);

  
  // const fetchQuote = async () => {
  //   const response = await fetch("https://api.quotable.io/random");
  //   const data = await response.json();
  //   return {
  //     content: data.content,
  //     author: data.author,
  //   };
  // };

  const fetchQuote = () => {
    return fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        return {
          content: data.content,
          author: data.author,
        };
        // setQuote(data.content);
        // setAuthor(data.author);
      });
  };

  const onClickNewQuote = () => {
    let data = fetchQuote();
    data.then(function (result) {
      // here you can use the result of promise data
      console.log(result);
      setQuote(result.content);
      setAuthor(result.author); 
    });
  };

  return (
    <div className="App">
      <QuoteBox
        quote={quote}
        author={author}
        onClickNewQuote={onClickNewQuote}
      ></QuoteBox>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

import "./QuoteBox.css";

const stylesquoteBox = {
  // border: '4px solid white',
};

const QuoteBox = (props) => {
  return (
    <div style={stylesquoteBox} className="mx-auto" id="quote-box">
      <p id="text">{props.quote}</p>
      <span id="author">{props.author}</span>
      <br />
      <br />
      <div>
        <p>
          <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">
            {/* Tweet it */}
            <img src="https://cdn-icons-png.flaticon.com/512/60/60580.png"/>
          </a>
        </p>
        <button id="new-quote" type="button" onClick={props.onClickNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;

import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";
function Booklist() {
  return (
    <div className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71h5+dpAriL._AC_UL600_SR600,400_.jpg"
        alt="image of a bestseller"
      />
      <h2>Twisted Games</h2>
      <p style={{ color: "inherit" }}>Ana Huang</p>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));

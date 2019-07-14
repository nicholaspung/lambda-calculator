import React from "react";

const NumberButton = ({ number, onClick }) => {
  return (
    <button className="numbers" onClick={() => onClick(number)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {number}
    </button>
  );
};

export default NumberButton;

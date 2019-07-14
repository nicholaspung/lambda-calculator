import React from "react";

const OperatorButton = ({ operator, onClick }) => {
  return (
    <button onClick={() => onClick(operator.char)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {operator.char}
    </button>
  );
};

export default OperatorButton;

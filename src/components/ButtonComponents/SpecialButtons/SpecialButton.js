import React from "react";

const SpecialButton = ({ special, onClick }) => {
  return (
    <button className="specials" onClick={() => onClick(special)}>
      {/* Display a button elemen rendering the data being passed down from the parent container on props */}
      {special}
    </button>
  );
};

export default SpecialButton;

import React from "react";

function Button({item, index, handleClick}) {
  return (
    <button className="square" index={index} onClick={() => handleClick(index)}>
      {item}
    </button>
  );
}

export default Button;

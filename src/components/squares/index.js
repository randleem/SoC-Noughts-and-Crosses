import React from "react";

function Button({item, index, handleClick}) {
  return (
    <button className="square" key={index} index={index} onClick={() => handleClick(index)}>
      {item}
    </button>
  );
}

export default Button;

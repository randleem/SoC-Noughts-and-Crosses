import React from "react";

function Button(item, index, handleClick) {
  return (
    <button index={index} onClick={handleClick}>
      {item}
    </button>
  );
}

export default Button;

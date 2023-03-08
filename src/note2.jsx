import React from "react";

function Exercise() {

  let [value, setValue] = React.useState(0)

  function add() {
  setValue(prev => prev + 1)
  }
  function sub() {
    setValue(prev => prev -1)
  }

  return (
    <div className="">
       <h1>{value}</h1>
       <button onClick={add}>+</button>
       <button onClick={sub}>-</button>
    </div>
  );
}

export default Exercise;

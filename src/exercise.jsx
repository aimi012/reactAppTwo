import React from "react";

function Exercise() {
  const [thingsArray, setThingsArray] = React.useState(["things1", "things2"]);

  function add() {
    setThingsArray(prev => {
      return [...prev, `things ${prev.length + 1}`];
    });
  }

  const RthingsArray = thingsArray.map(i => <p key={i}>{i}</p>);

  return (
    <div className="">
      <button onClick={add}>Add Item</button>
      <h1>{RthingsArray}</h1>
    </div>
  );
}

export default Exercise;

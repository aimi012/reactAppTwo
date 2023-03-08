import React from "react";

function Exercise() {

  const [array, setSrray] = React.useState(['things1', 'things2'])

  const RArray = array.map(i => <p key={i}>{i}</p>)

  function add(){
    setSrray(prev => [...prev, `things ${prev.length + 1}`])
  }


  return (
    <div className="">
      <button onClick={add}>Add Item</button>
      <h1>{RArray}</h1>
    </div>
  );
}

export default Exercise;

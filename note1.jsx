import React from "react";

function Exercise() {
const [contact, setContact] = React.useState({
  firstName: 'john',
  lastName: 'doe',
  phone: '01117798546',
  email: 'amiurlazlan01@gmail.com',
  isFavorite: false
})

let starIcon = contact.isFavorite ? "https://th.bing.com/th/id/OIP.ONmwdQNeWqiSpFZilYEJvAHaHC?w=195&h=185&c=7&r=0&o=5&pid=1.7" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1024px-Empty_Star.svg.png"

function favorite() {
  setContact(prev => {
    return {
      ...prev,
      isFavorite: !prev.isFavorite
    }
  })
}
  return (
    <div className="">
      <button onClick={favorite}>Add to favorite</button>
      <h1>{contact.firstName} {contact.lastName}</h1>
      <p>{contact.phone}. {contact.email}</p>
      <img src={starIcon} alt="" />
    </div>
  );
}

export default Exercise;

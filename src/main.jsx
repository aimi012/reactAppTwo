import React from "react";
import maindata from "./maindata";

function Main() {

    // const [Image, setImage] = React.useState("")
    const [meme, setMeme] = React.useState({
      topText: '',
      bottomText: '',
      randomImage: ""
    })
    const [allMemeImage, setAllMemeImage] = React.useState(maindata)

  function newImage() {
    const maindataa = maindata.data.meme;
    const random = Math.floor(Math.random() * maindataa.length);
    const url = maindataa[random].url;
    setMeme(prev=> ({
      ...prev,
      randomImage: url
    }))
  }

  return (
    <div className="main">
      <form action="">
        <input type="text" placeholder="Text 1" className="form-input" />

        <input type="text" placeholder="Text 2" className="form-input" />
      </form>
      <button onClick={newImage} className="button">
        Get a new image
      </button>
      <img src={meme.randomImage} alt="" />
    </div>
  );
}

export default Main;

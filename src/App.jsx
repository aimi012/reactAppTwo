import "./App.css";
import Header from "./head";
import Main from "./main";
import Footer from "./footer";
import maindata from "./maindata";
import Exercise from "./exercise";

function App() {
  let isDarkmode = true;

  function toggle() {
    isDarkmode = !isDarkmode;
  }

  const styles = {
    backgroundColor: isDarkmode ? "black" : "white",
  };

  return (
    <div style={styles} className="App">
      <Header />
      <Main />
      {/* <Exercise /> */}
    </div>
  );
}

export default App;

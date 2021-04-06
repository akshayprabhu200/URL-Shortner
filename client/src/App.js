import "./App.css";
import Encode from "./components/encode";
import Decode from "./components/decode";

function App() {
  return (
    <div className="Container">
      <Encode></Encode>
      <div className="Spacer"></div>
      <Decode></Decode>
    </div>
  );
}

export default App;

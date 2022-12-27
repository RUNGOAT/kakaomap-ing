import { useState } from "react";
import "./App.css";
import Test from "./components/Test";
import KakaoMap from "./components/KakaoMap";

function App() {
  const [inputData, setInputData] = useState("");

  const handleinput = () => {
    const data = document.getElementById("inputValue")
    setInputData(data.value)
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is KakaoMap.</p>
      </header> */}
      <div>
        <input
          id="inputValue"
          type="text"
        />
        <button onClick={handleinput}>검색</button>
      </div>
      <KakaoMap inputData={inputData}/>
    </div>
  );
}

export default App;

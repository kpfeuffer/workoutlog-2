import React from "react";
import ReactDOM from "react-dom";
import NumberPicker from "./components/number-picker";
import RecommendationInput from "./components/recommendation-input";

import "./styles.css";

const recommendations = ["Pizza", "Pasta", "Salad", "Lasagna", "Dessert"];
function App() {
  let [nmb, sNmb] = React.useState(15);
  let [text, sText] = React.useState("default");
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>*/}
      <NumberPicker number={nmb} setNumber={sNmb} />
      <RecommendationInput
        text={text}
        setText={sText}
        recommendations={recommendations}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

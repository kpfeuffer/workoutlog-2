import React from "react";
import ReactDOM from "react-dom";
import NumberPicker from "./components/number-picker";
import RecommendationInput from "./components/recommendation-input";
import {createStore, Dispatch} from "redux";
import {PButton, Colors} from "./components/button";
import {Provider } from "react-redux";
import {reducer, Actions} from "./store";

import "./styles.css";
import { CreateSheetButton } from "./controls/createsheet-button";
import Tabs from "./components/tabs";
import {store} from "./store";
import SheetListing from "./controls/sheet-listing";

function App() {
  let [nmb, sNmb] = React.useState(15);
  let [text, sText] = React.useState("default");
  return (
    <Provider store={store}>
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>*/}
      {/* <NumberPicker number={nmb} setNumber={sNmb} /> */}
      {/* <RecommendationInput
        text={text}
        setText={sText}
        recommendations={recommendations}
      /> */}
      {/* <PButton color={Colors.primary} onClick={()=>store.dispatch({type:Actions.createWorkoutSheet, payload:"stuff"})}>Create</PButton> */}
      <SheetListing>
        <div style={{"float":"left"}}>
          <CreateSheetButton>Create</CreateSheetButton>
        </div>
      </SheetListing>

    </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

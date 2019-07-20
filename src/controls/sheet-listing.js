import React from "react";
import {connect} from "react-redux";
import {reducers} from "../store"
import Tabs from "../components/tabs";

 function Listing({
    items,
    children
}) {
    // let viewItems = [];
    return (
    <>
      <Tabs names={items} onSelected={console.log}>
          {children}
      </Tabs>
      <div style={{'clear':'both'}}> </div>
    </>
    );
    // for(let id in items) {
    //     viewItems.push(
    //     <li>
    //         {items[id].name || items[id]}
    //     </li>);
    // }
    // console.log("viewItems", items);
    // return (
    //     <ul>
    //         {viewItems}
    //     </ul>
    // );
}

const MapStateToProps = (state, props)=>{
    const sheets = [];
    let stateSheetsObj = state["SHEET"];
    Object.keys(stateSheetsObj || {}).forEach(key=> {
        sheets.push(stateSheetsObj[key]);
    })
    
    return {
        items:sheets
    };
};

const SheetListing = connect(MapStateToProps)(Listing);
export default SheetListing;
import {PButton, Colors} from "../components/button";
import {connect} from "react-redux";
import { SheetActionTypes } from "../store";

const mapStateToProps = (state)=> {
    return {
        color:Colors.secondary,
    }
};
const mapDipatchToProps = {
    onClick: ()=>({type: SheetActionTypes.upsert, payload:{id:new Date().toISOString(), name:new Date().toISOString()}})
};

export const CreateSheetButton = connect(mapStateToProps, mapDipatchToProps)(PButton)

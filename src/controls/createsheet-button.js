import {PButton, Colors} from "../components/button";
import {connect} from "react-redux";
import { Actions } from "../store";

const mapStateToProps = (state)=> {
    return {
        color:Colors.secondary,
    }
};
const mapDipatchToProps = {
    onClick: ()=>({type: Actions.createWorkoutSheet, payload:{}})
};

export const CreateSheetButton = connect(mapStateToProps, mapDipatchToProps)(PButton)

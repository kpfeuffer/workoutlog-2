export const Actions = {
    initialize:"initalize",
    createWorkoutSheet: "createWorkoutSheet"
}

const initialState = {
    sheets: []
}

export const reducer = (state, action)=> {
    switch(action.type) {
        case Actions.initialize: {
            console.log("state initialized");
            return initialState;
        }break;
        case Actions.createWorkoutSheet: {
            console.log(state, action);
        }break;
        default: {
            console.log('store defaulted', action);
            return state;
        }
    }
    return state;

}
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
            return initialState;
        }break;
        case Actions.createWorkoutsheet: {
            console.log(state, action);
        }break;
    }
    return state;

}
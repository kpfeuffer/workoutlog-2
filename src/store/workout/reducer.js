export const WorkoutActionTypes= {
    upsert:"workout/upsert",
    upserted:"workout/upserted",
    upsertMany: "workout/upsertMany",
    upsertedMany:"workout/upsertedMany",
    // get: "workout/get",
    // gotten: "workout/get",
    remove: "workout/remove",
    removed: "workout/remove",
    sync: "workout/sync"
};

export const WorkoutReducer = (state, action) => {
    switch(action.type){
        case WorkoutActionTypes.upsert:{
            return handleUpsert(state, action);
        }
        case WorkoutActionTypes.remove: {
            return handleRemove(state, action);
        }
        case WorkoutActionTypes.upsertMany: {
            return handleUpsertMany(state, action);
        }
        default:
            return {sheets:{}};
    }
}

const handleUpsert = (state, action) => {
    return {
        ...state,
        [action.payload.id]: action.payload.name
    }
}

const handleUpsertMany = (state, action) => {
    return Object.assign({}, state, ...action.payload);
    
}

const handleRemove = (state,action) => {
    let newState = {};
    Object.keys(state)
        .filter(id=> id!== action.id)
        .forEach(prop=> {
            newState[prop]=state[prop];
        })
    return newState;
}

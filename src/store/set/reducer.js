export const SetActionTypes= {
    upsert:"set/upsert",
    upserted:"set/upserted",
    upsertMany: "set/upsertMany",
    upsertedMany:"set/upsertedMany",
    // get: "set/get",
    // gotten: "set/get",
    remove: "set/remove",
    removed: "set/remove",
    sync: "set/sync"
};

export const SetReducer = (state, action) => {
    switch(action.type){
        case SetActionTypes.upsert:{
            return handleUpsert(state, action);
        }
        case SetActionTypes.remove: {
            return handleRemove(state, action);
        }
        case SetActionTypes.upsertMany: {
            return handleUpsertMany(state, action);
        }
        default:
            return {};
    }
}

const handleUpsert = (state, action) => {
    return {
        ...state,
        [action.payload.id]: action.payload.name
    }
}

const handleUpsertMany = (state, action) => {
    return Object.assign({}, state, action.payload);
    
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

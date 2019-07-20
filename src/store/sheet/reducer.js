export const SheetActionTypes= {
    upsert:"sheet/upsert",
    upserted:"sheet/upserted",
    upsertMany: "sheet/upsertMany",
    upsertedMany:"sheet/upsertedMany",
    // get: "sheet/get",
    // gotten: "sheet/get",
    remove: "sheet/remove",
    removed: "sheet/remove",
    sync: "sheet/sync"
};


export const SheetReducer = (state, action) => {
    console.log(state);
    switch(action.type){
        case SheetActionTypes.upsert:{
            return handleUpsert(state, action);
        }
        case SheetActionTypes.remove: {
            return handleRemove(state, action);
        }
        case SheetActionTypes.upsertMany: {
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
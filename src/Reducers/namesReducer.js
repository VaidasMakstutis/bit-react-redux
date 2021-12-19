
const initNames = {
    boys: ['Tom', 'Bob', 'Peter'],
    girls: ['Lin', 'Ann', 'Pepsi']
}

function namesReducer(state = initNames, action) {
    let names = {...state};
    switch(action.type) {
        default:
    }

    return names;
}

export default namesReducer;
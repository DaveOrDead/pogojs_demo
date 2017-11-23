const pogoState = {};
/*
streams: {
    addClients: {
        components: [id_table_1, id_table_2],
        globalParams: {
            clientId: 56
        },
    addTasks: {
        components: [id_table_2],
        globalParams: {
            taskId: 102
        },
    }
}

scopedParams: {
    id_table_1: {
        sort: 'email-asc',
    },
    id_table_2: {
        sort: 'name-asc',
    }
}
*/

export function updatePogoState(...newState) {
    console.log('newState: ', newState);
    newState.map(item => Object.assign(pogoState, item));
    // console.log(pogoState);
}

export function fetchPogoState(key) {
    return pogoState[key];
}

export default pogoState;

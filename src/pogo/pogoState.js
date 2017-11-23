const pogoState = {};

export function updatePogoState(...newState) {
    newState.map(item => {
        Object.assign(pogoState, item);
    });
    console.log(pogoState);
}

export function fetchPogoState(key) {
    return pogoState[key];
}

export default pogoState;

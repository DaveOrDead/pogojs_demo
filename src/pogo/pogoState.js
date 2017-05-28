const pogoState = {};

export function updatePogoState(key, params) {
    pogoState[key] = pogoState[key] || {};
    Object.assign(pogoState[key], params);
    console.log(pogoState);
}

export function fetchPogoState(key) {
    return pogoState[key];
}

export default pogoState;



const pogoState = {};

export function updatePogoState(key, params) {
    pogoState[key] = pogoState[key] || {};
    Object.assign(pogoState[key], params);
}

export function fetchPogoState(key) {
    console.log(pogoState);
    return pogoState[key];
}

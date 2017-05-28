const pogoMap = {};

export function register(...params) {
    params.map(item => {
        const { hook, type, func } = item;
        if (pogoMap[hook]) console.warn(`Warning! ${hook} is already registered :S`);
        pogoMap[hook] = Object.assign({}, { func, type });
    });
}

export default pogoMap;

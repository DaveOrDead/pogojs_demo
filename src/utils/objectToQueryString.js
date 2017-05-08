const objectToQueryString = (object) => {
    let query = '';
    Object.keys(object).forEach(key => {
        if (object[key] !== undefined) {
            query += `${key}=${object[key]}&`;
        }
    });
    return query;
};

export default objectToQueryString;

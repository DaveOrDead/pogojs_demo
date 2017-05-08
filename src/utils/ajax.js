import objectToQueryString from './objectToQueryString';

const ajax = (type, params, data) => {
    const query = objectToQueryString(params.data);

    const xhr = new XMLHttpRequest();
    xhr.open(type, `${params.url}?${query}`);

    xhr.onload = () => {
        if (xhr.status === 200) {
            if(params.success) params.success(xhr.responseText);
        } else {
            console.log(`Request failed.  Returned status of ${xhr.status}`);
        }
    };
    xhr.send(data);
};


export default ajax;

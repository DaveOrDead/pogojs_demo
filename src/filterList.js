import get from './utils/get';
import {fetchPogoState, updatePogoState, pogoAttributes, pogoBind, register, store} from './pogo';


function filter(e) {
    const el = e.target;
    //const {streams, params} = pogoAttributes(el);
    const {targetContainer, targetUrl, params} = pogoAttributes(el);
    const container = document.getElementById(targetContainer);

    updatePogoState(
        targetUrl,
        Object.assign(
            {},
            JSON.parse(params || '{}'),
            {p_filter: el.value}
        )
    );
    const data = fetchPogoState(targetUrl);

    get({
        url: targetUrl,
        data,
        success: result => {
            container.innerHTML = result;
            pogoBind(container);
        }
    });

    store.publish(targetUrl);
}


const filterList = () => {
    register({
        hook: 'filter',
        type: 'keyup',
        func: filter
    });
};


export default filterList;

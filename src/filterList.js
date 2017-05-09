import attachEvent from './utils/attachEvent';
import get from './utils/get';
import {fetchPogoState, updatePogoState} from './pogoState';


function filter(e) {
    const el = e.target;
    const containerId = el.getAttribute('pogo-target-container');
    const targetUrl = el.getAttribute('pogo-target-url');
    const pogoParams =  el.getAttribute('pogo-params');
    const container = document.getElementById(containerId);

    updatePogoState(
        targetUrl,
        Object.assign(
            {},
            JSON.parse(pogoParams || '{}'),
            {p_filter: el.value}
        )
    );
    const data = fetchPogoState(targetUrl);

    get({
        url: targetUrl,
        data,
        success: result => {
            container.innerHTML = result;
        }
    });
}

const filterList = () => {
    attachEvent('pogo-filter', 'keyup', filter);
};


export default filterList;

import attachEvent from './utils/attachEvent';
import get from './utils/get';
import pogoAttributes from './pogoAttributes';
import {fetchPogoState, updatePogoState} from './pogoState';


function filter(e) {
    const el = e.target;
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
        }
    });
}

const filterList = () => {
    attachEvent('pogo-filter', 'keyup', filter);
};


export default filterList;

import attachEvent from './utils/attachEvent';
import get from './utils/get';
import pogoAttributes from './pogoAttributes';
import {fetchPogoState, updatePogoState} from './pogoState';


function go(e) {
    // stop links redirecting
    if (e.target.matches('a')) e.preventDefault();

    const el = e.target;
    const {targetContainer, targetUrl, params} = pogoAttributes(el);
    const container = document.getElementById(targetContainer);

    updatePogoState(
        targetUrl,
        Object.assign(
            {},
            JSON.parse(params || '{}')
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

const route = () => {
    attachEvent('pogo-route', 'click', go);
};


export default route;

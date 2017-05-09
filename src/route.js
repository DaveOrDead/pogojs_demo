import attachEvent from './utils/attachEvent';
import get from './utils/get';
import {fetchPogoState, updatePogoState} from './pogoState';


function go(e) {
    const el = e.target;
    const containerId = el.getAttribute('pogo-target-container');
    const targetUrl = el.getAttribute('pogo-target-url');
    const pogoParams =  el.getAttribute('pogo-params');


    // stop links redirecting
    if (e.target.matches('a')) e.preventDefault();

    const container = document.getElementById(containerId);

    updatePogoState(
        targetUrl,
        Object.assign(
            {},
            JSON.parse(pogoParams || '{}')
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

import get from './utils/get';
import {fetchPogoState, updatePogoState, pogoAttributes, pogoBind, register} from './pogo';



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
            pogoBind(container);
        }
    });
}

const route = () => {
    register({
        hook: 'route',
        type: 'click',
        func: go
    });
};


export default route;

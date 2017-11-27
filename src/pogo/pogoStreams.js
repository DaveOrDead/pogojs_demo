import {register, bind, pogoset} from 'pogojs';
import streams from './pogoObserve';
import state from './pogoState';
import get from './../utils/get';

export function reload(url, container, data = {}) {
    let defaultParams = {};
    const firstChild = container.firstElementChild;

    if (firstChild) {
        const {params} = pogoset(firstChild);
        if (params) defaultParams = JSON.parse(params);
    }

    get({
        url,
        data: Object.assign({}, defaultParams, data),
        success: result => {
            container.innerHTML = result;
            bind(container);
        }
    });
}

function subscribe(el) {
    const {streams: streamsToObserve, reload: loadUrl} = pogoset(el);
    streams.subscribe(streamsToObserve, params => reload(loadUrl, el, params));
}

const init = () => {
    register({
        hook: 'subscribe',
        type: 'immediate',
        func: subscribe
    });
};

export default init;

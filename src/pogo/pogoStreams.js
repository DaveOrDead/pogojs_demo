import {register, bind, pogoset} from 'pogojs';
import streams from './pogoObserve';
import state from './pogoState';
import get from './../utils/get';

export function reload(url, container, data = {}) {
    get({
        url,
        data,
        success: result => {
            container.innerHTML = result;
            bind(container);
        }
    });
}

function pogoStreams(el) {
    const {streams: streamsToObserve, reload: loadUrl} = pogoset(el);
    streams.subscribe(streamsToObserve, params => reload(loadUrl, el, params));
}

const subscribe = () => {
    register({
        hook: 'subscribe',
        type: 'immediate',
        func: pogoStreams
    });
};

export default subscribe;

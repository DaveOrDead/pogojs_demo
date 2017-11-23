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
            if (state.previouslyFocusedElement) {
                window.setTimeout(() => {
                    state.previouslyFocusedElement.focus();
                }, 0);
            }
            bind(container);
        }
    });
}

function pogoStreams(el) {
    const {streams: observers, reload: loadUrl} = pogoset(el);
    streams.subscribe(observers, params => reload(loadUrl, el, params));
}

const subscribe = () => {
    register({
        hook: 'subscribe',
        type: 'immediate',
        func: pogoStreams
    });
};

export default subscribe;

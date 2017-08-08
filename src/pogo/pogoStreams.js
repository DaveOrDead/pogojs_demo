import pogoMap, {register} from './pogoMap';
import pogoBind from './pogoBind';
import pogoset from './pogoset';
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
            pogoBind(container);
        }
    });
}

function pogoStreams(el) {
    const { streams, reload } = pogoset(el);
    streams.subscribe(streams, params => reload(reload, el, params));
}


const subscribe = () => {
    register({
        hook: 'subscribe',
        type: 'immediate',
        func: pogoStreams
    });
};

export default subscribe;

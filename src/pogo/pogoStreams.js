import pogoMap, {register} from './pogoMap';
import pogoBind from './pogoBind';
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
    streams.subscribe(el.getAttribute('pogo-streams'), (params) => reload(el.getAttribute('pogo-reload'), el, params));
}


const subscribe = () => {
    register({
        hook: 'subscribe',
        type: 'immediate',
        func: pogoStreams
    });
};

export default subscribe;

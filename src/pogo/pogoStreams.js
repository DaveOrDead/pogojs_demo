import pogoMap, {register} from './pogoMap';
import pogoBind from './pogoBind';
import store from './pogoObserve';
import each from './../utils/each';
import get from './../utils/get';
import hyphenToCamelCase from './../utils/hyphenToCamelCase';

 function reload(url, container ) {
    get({
        url,
        data: {},
        success: result => {
            container.innerHTML = result;
            pogoBind(container);
        }
    });
}

function pogoStreams(context, el) {
    store.subscribe(el.getAttribute('pogo-streams'), () => reload(el.getAttribute('pogo-reload'), el));
}


const subscribe = () => {
    register({
        hook: 'subscribe',
        type: 'immediate',
        func: pogoStreams
    });
};

export default subscribe;

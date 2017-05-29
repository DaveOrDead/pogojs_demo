import get from './utils/get';
import {fetchPogoState, updatePogoState, pogoAttributes, pogoBind, register, store} from './pogo';


function filter(e) {
    const el = e.target;
    const {publish, params} = pogoAttributes(el);

    updatePogoState(
        publish,
        Object.assign(
            {},
            JSON.parse(params || '{}'),
            {p_filter: el.value}
        )
    );

    store.publish(publish);
}


const filterList = () => {
    register({
        hook: 'filter',
        type: 'keyup',
        func: filter
    });
};


export default filterList;

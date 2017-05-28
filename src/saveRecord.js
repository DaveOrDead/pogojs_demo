import post from './utils/post';
import pogoBind from './pogoBind';
import {register} from './pogoMap';
import formToJSON from './utils/formToJSON';
import {fetchPogoState, updatePogoState} from './pogoState';
import store from './pogoObserve';
import pogoAttributes from './pogoAttributes';


function save(e) {
    e.preventDefault();
    const form = e.target;
    const data = formToJSON(form.elements);
    const {streams} = pogoAttributes(form);

    post({
        url: form.action,
        data,
        success: result => {
            updatePogoState(
                streams,
                Object.assign(
                    {},
                    {"update": true}
                )
            );
            pogoBind();
            store.publish(streams);
        }
    })
}

const saveRecord = () => {
    register({
        hook: 'submit',
        type: 'submit',
        func: save
    });
};


export default saveRecord;

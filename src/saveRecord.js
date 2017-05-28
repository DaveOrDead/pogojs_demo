import post from './utils/post';
import {fetchPogoState, updatePogoState, pogoAttributes, pogoBind, register, store} from './pogo';
import formToJSON from './utils/formToJSON';


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

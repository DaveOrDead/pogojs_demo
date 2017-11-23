import post from './utils/post';
import {register} from 'pogojs';
import {store} from './pogo';
import formToJSON from './utils/formToJSON';

function save(e) {
    e.preventDefault();
    const form = e.target;
    const data = formToJSON(form.elements);

    post({
        url: form.action,
        data,
        success: result => {
            const res = JSON.parse(result);
            store.publish(...res.streams);
        }
    });
}

const saveRecord = () => {
    register({
        hook: 'submit',
        type: 'submit',
        func: save
    });
};

export default saveRecord;

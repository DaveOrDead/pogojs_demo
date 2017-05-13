import post from './utils/post';
import attachEvent from './utils/attachEvent';
import formToJSON from './utils/formToJSON';


function save(e) {
    e.preventDefault();
    const form = e.target;
    const data = formToJSON(form.elements);

    console.log(data);

    post({
        url: form.action,
        data,
        success: result => {
            console.log(result);
        }
    })
}

const saveRecord = () => {
    attachEvent('pogo-submit', 'submit', save);
};


export default saveRecord;

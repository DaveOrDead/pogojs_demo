import attachEvent from './utils/attachEvent';
import get from './utils/get';


function filter(e) {
    const el = e.target;
    const data = e.target ? e.target.dataset : e;
    const container = document.getElementById(data.pogoTargetContainer);

    get({
        url: data.pogoTargetUrl,
        data: Object.assign({}, JSON.parse(data.pogoParams || '{}'), {"p_filter": el.value}),
        success: result => {
            container.innerHTML = result;
        }
    });
}

const filterList = () => {
    attachEvent('pogo-filter', 'keyup', filter);
};


export default filterList;

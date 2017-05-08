import attachEvent from './utils/attachEvent';
import get from './utils/get';


function go(e) {
    const data = e.target ? e.target.dataset : e;

    // stop links redirecting
    if (e.target.matches('a')) e.preventDefault();

    const container = document.getElementById(data.pogoTargetContainer);

    get({
        url: data.pogoTargetUrl,
        data: Object.assign({}, JSON.parse(data.pogoParams || '{}')),
        success: result => {
            container.innerHTML = result;
        }
    });
}

const route = () => {
    attachEvent('pogo-route', 'click', go);
};


export default route;

import { updatePogoState, pogoset, register, store } from './pogo';


function go(e) {
    // stop links redirecting
    if (e.target.matches('a')) e.preventDefault();

    const el = e.target;
    const { publish, params } = pogoset(el);

    updatePogoState({
        previouslyFocusedElement: el,
    }, {
        [publish]:
            Object.assign(
                {},
                JSON.parse(params || '{}')
            ),
    });

    store.publish(publish);
}

const route = () => {
    register({
        hook: 'route',
        type: 'click',
        func: go,
    });
};


export default route;

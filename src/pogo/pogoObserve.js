import pogoState from './pogoState';

const subscribers = {};

function subscribe(streams, cb) {
    const subs = streams.trim().split(/\s+/);
    subs.map(stream => {
        subscribers[stream] = subscribers[stream] || [];
        subscribers[stream].push(cb);
    });
}

function unsubscribe(stream, cb) {
    const subs = subscribers[stream] || [];
    subs.map(stream => {
        if (subscribers[i] === cb) {
            subscribers.splice(i, 1);
            return;
        }
    });
}

function publish(...streams) {
    streams.map(stream => {
        const subs = subscribers[stream] || [];
        subs.map((s, i) => {
            subscribers[stream][i](pogoState[stream] || {});
        });
    });
}

const store = {
    subscribe,
    unsubscribe,
    publish
};

export default store;

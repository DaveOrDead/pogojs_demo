import pogoState from './pogoState';

const Observable = function Observable() {
    this.subscribers = {};
};

Observable.prototype = {
    subscribe(streams, cb) {
        const subs = streams.trim().split(/\s+/);
        const self = this;
        subs.map(stream => {
            self.subscribers[stream] = self.subscribers[stream] || [];
            self.subscribers[stream].push(cb);
        });
    },

    unsubscribe(stream, cb) {
        const items = this.subscribers[stream] || [];
        for (let i = 0; i < items.length; i++) {
            if (this.subscribers[i] === cb) {
                this.subscribers.splice(i, 1);
                return;
            }
        }
    },

    publish(...streams) {
        const self = this;
        streams.map(stream => {
            const subs = self.subscribers[stream] || [];
            subs.map((s, i) => {
                self.subscribers[stream][i](pogoState[stream] || {});
            });
        });
    }
};

const store = new Observable();

export default store;

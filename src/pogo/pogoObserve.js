import pogoState from './pogoState';
import pogoBind from './pogoBind';
import get from './../utils/get';
import each from './../utils/each';


const Observable = function() {
    this.subscribers = {};
}

Observable.prototype = {
    subscribe: function(stream, cb) {
        this.subscribers[stream] = this.subscribers[stream] || [];
        this.subscribers[stream].push(cb);
    },
    unsubscribe: function(stream, cb) {
        const items = this.subscribers[stream] || [];
        for (let i = 0; i < items.length; i++) {
            if (this.subscribers[i] === cb) {
                this.subscribers.splice(i, 1);
                return;
            }
        }
    },

    publish: function(streams) {
        var self = this;
        streams.map(stream => {
            const subs = self.subscribers[stream] || [];
            subs.map((s, i) => {
                self.subscribers[stream][i]();
            });
        });
    }
};

const store = new Observable();

export default store

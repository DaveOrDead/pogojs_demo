import pogoState from './pogoState';
import get from './utils/get';


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

    publish: function(stream, state = pogoState) {
        const items = this.subscribers[stream] || [];
        for (let i = 0; i < items.length; i++) {
            this.subscribers[stream][i](state);
        }
        // const els = document.querySelectorAll(`[pogo-streams="${stream}"]`);

        // for (let i = 0; i < els.length; i++) {
        //     const {targetContainer, targetUrl} = pogoAttributes(el);
        //     const container = document.getElementById(targetContainer);

        //     get({
        //         url: stream,
        //         data: pogoState[stream],
        //         success: result => {
        //             container.innerHTML = result;
        //         }
        //     });
        // }

    }
};

const store = new Observable();

export default store

import route from './route';
import filterList from './filterList';
import saveRecord from './saveRecord';
import store from './pogoObserve';
import pogoBind from './pogoBind';

const tasks = state => {
    if(state.team_table) {
        console.log('tasks called');
        document.getElementById('tasks_count').innerHTML = state.team_table.p_filter.length;
    }
}

const clients = state => {
    if(state.add_client) {
        console.log('add client called');
        console.log(state.add_client);
    }
}

store.subscribe('team_table', tasks);
store.subscribe('add_client', clients);

filterList();
route();
saveRecord();
pogoBind();

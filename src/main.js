import route from './route';
import filterList from './filterList';
import saveRecord from './saveRecord';
import {store, pogoBind, pogoStreams} from './pogo';



filterList();
route();
pogoStreams();
saveRecord();


// Must come last to register all
pogoBind();

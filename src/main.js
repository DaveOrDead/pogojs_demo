import route from './route';
import tabs from './tabs';
import filterList from './filterList';
import saveRecord from './saveRecord';
import { pogoBind, pogoStreams } from './pogo';


filterList();
route();
pogoStreams();
saveRecord();
tabs();

// Must come last to register all
pogoBind();

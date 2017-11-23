import route from './route';
import tabs from './tabs';
import filterList from './filterList';
import saveRecord from './saveRecord';
import {pogoStreams} from './pogo';
import {bind} from 'pogojs';

filterList();
route();
pogoStreams();
saveRecord();
tabs();

// Must come last to register all
bind();

import get from './utils/get';
import  {addClass, removeClass, find} from './utils/dom';
import {fetchPogoState, updatePogoState, pogoAttributes, pogoBind, register, store, reload} from './pogo';

function openTab(el) {
    const {load, params = {}} = pogoAttributes(el);
    const container = find(`#${el.getAttribute('aria-controls')}`);
    addClass(el.parentNode, 'active');
    reload(load, container, params);
}

function closeTab(el) {
    const tablist = el.closest('[role="tablist"]');
    const prevTab = find('.active', tablist);
    removeClass(prevTab, 'active');
}

function switchTabs(e) {
    if (e.target.matches('a')) e.preventDefault();
    const el = e.target;
    closeTab(el);
    openTab(el);
}

const tabs = () => {
    register({
        hook: 'tab',
        type: 'click',
        func: switchTabs
    }, {
        hook: 'defaultTab',
        type: 'immediate',
        func: openTab
    });
};


export default tabs;

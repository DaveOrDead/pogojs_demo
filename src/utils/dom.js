const toggleClass = (el, ...classNames) => {
    classNames.map(c => el.classList.toggle(c));
    return el;
};

const hasClass = (el, className) => el.classList.contains(className);

const addClass = (el, ...classNames) => {
    classNames.map(c => el.classList.add(c));
    return el;
};

const removeClass = (el, ...classNames) => {
    classNames.map(c => el.classList.remove(c));
    return el;
};

const find = (selector, context = document) => context.querySelector(selector);

const findAll = (selector, context = document) => context.querySelectorAll(selector);


export {
        addClass,
        find,
        findAll,
        hasClass,
        removeClass,
        toggleClass,
    };

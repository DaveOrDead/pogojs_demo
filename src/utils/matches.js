const matches = selector => {
    const _matches = (this.document || this.ownerDocument).querySelectorAll(selector),
        i = _matches.length;
    while (--i >= 0 && _matches.item(i) !== this) {}
    return i > -1;            
};

export default matches;

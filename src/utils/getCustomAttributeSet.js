import hyphenToCamelCase from './hyphenToCamelCase';


const getCustomAttributeSet = (el, prefix) => {
    const attributeSet = {};
    const atts = el.attributes;
    for (let i = 0; i < atts.length; i++) {
        const att = atts[i].nodeName.toLowerCase();
        if(att.length >= prefix.length && att.substring(0, prefix.length) === prefix) {
            attributeSet[hyphenToCamelCase(att.substring(prefix.length, att.length))] = atts[i].nodeValue;
        }
    }
    return attributeSet;
}


export default getCustomAttributeSet;

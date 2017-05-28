import getCustomAttributeSet from './../utils/getCustomAttributeSet';

const pogoAttributes = el => getCustomAttributeSet(el, 'pogo-');

export default pogoAttributes;
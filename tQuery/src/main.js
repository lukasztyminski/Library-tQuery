import {tymonQuery as tQuery} from './Library/tQuery.js';
import { isSelector, isHTMLTag, isDOMNode } from './Utils/Check.js';
import {findElements, createElement } from './Utils/Element.js';
import Ajax from './Library/Ajax.js';
import {staticMixin} from './Utils/Mixin.js';

function init(param){
    let nodes = null;

    if(isSelector(param)){
        nodes = findElements(param);
    } else if (isHTMLTag(param)){
        nodes = createElement(param);
    } else if (isDOMNode(param)) {
        nodes = param;
    }

    return tQuery.create(nodes);
}

staticMixin(init, Ajax);

export default init;
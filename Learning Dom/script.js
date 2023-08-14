// selecting element

const items = document.querySelector('#items');

//  parentNode parentElemnet

console.log(items.parentNode); //
console.log(items.parentElemnet);

// childNode and children

console.log(items.childNodes); // elements with textNode
console.log(items.children); // elements

// firstelementchild and firstchild

console.log(items.firstChild); //textNode
console.log(items.firstElementChild);


// lastelementchild and lastchild

console.log(items.lastChild); //textNode
console.log(items.lastElementChild);

// nextsibling and nextelementsibling

console.log(items.nextSibling); //textNode
console.log(items.nextElementSibling);


// previoussibling and previouselementsibling

console.log(items.previousSibling); //textNode
console.log(items.previousElementSibling);

// createelement

const newDiv = document.createElement('div');

// setAttribute

newDiv.setAttribute('id', 'hehe');

// createtesxtnode

const newDivText = document.createTextNode('hold on');

// appendchild

newDiv.appendChild(newDivText);
console.log(newDiv);

// adding helo before item lister

const header = document.querySelector('#header-title');
const newText = document.createTextNode('helo');
header.parentNode.insertBefore(newText, header);

// adding helo before item 1

items.insertBefore(newText, items.children[0]);
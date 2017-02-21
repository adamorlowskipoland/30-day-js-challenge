const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem (e) {
    e.preventDefault();
    const text = (this.querySelector("[name=item]")).value;
    const item = {
//        text, // this is ES6 way creating properties
        text: text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
//    localStorage.setItem
//    localStorage.getItem
//    localStorage.removeItem
    localStorage.setItem("items", JSON.stringify(items));
    
    this.reset();
}

// we create a function to put items in the list in html
function populateList (plates = [], platesList) { //plates is items ; platesList is ul plates
    platesList.innerHTML = plates.map((plate, i) => { // takes item from items and their index
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label> 
            </li>
        `;
    }).join("");
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const elIndex = el.dataset.index;
    items[elIndex].done = !items[elIndex].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
    
    console.log();
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);

// additional tasks:
// 1. add check all button

// 2. add uncheck all button
// 3. add clear all button remove local storage
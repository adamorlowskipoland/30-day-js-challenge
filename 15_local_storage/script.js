const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
var items = JSON.parse(localStorage.getItem('items')) || [];


const toggleBtns = document.getElementById('toggleBtns');
const checkAll = document.getElementById('checkAll');
const unCheckAll = document.getElementById('unCheckAll');
const deleteAll = document.getElementById('deleteAll');

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
    showToggleBtns();
    
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

// this event target dataset can be very useful
function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const elIndex = el.dataset.index;
    items[elIndex].done = !items[elIndex].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
    showToggleBtns();
    
    console.log();
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
showToggleBtns();

// additional tasks:
// 1. add check all button
// 2. add uncheck all button
// 3. add clear all button remove local storage



// adding btns to show only when the list is not empty.
function showToggleBtns() {
    if (items.length !== 0) {
        toggleBtns.style.display = 'block';
    } else {
        toggleBtns.style.display = 'none';
    }
}


// ad1.
function checkAllitems() {
    items.forEach(function(item){
        item.done = true;
        populateList(items, itemsList);
        showToggleBtns();
//        view.display();
    })
}


// ad2.
function unCheckAllitems() {
    items.forEach(function(item){
        item.done = false;
        populateList(items, itemsList);
        showToggleBtns();
//        view.display();
    })
}

// ad3.
function deleteAllitems() {
    items = [];
    localStorage.removeItem('items');
    populateList(items, itemsList);
    showToggleBtns();
}

checkAll.addEventListener('click', checkAllitems);
unCheckAll.addEventListener('click', unCheckAllitems);
deleteAll.addEventListener('click', deleteAllitems);




// I will add that later
//const view = {
//    display: function() {
//        populateList(items, itemsList);
//        showToggleBtns();
//    }
//}





















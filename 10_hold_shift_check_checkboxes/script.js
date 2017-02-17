const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
//console.log(checkBoxes);

let lastChecked;

function handleCheck(e) {
    // 1. check if the shift key was down
    // 2. check if the check is being checked not uncheking
    if (e.shiftKey && this.checked) {
        
    }
    
    
    lastChecked = this;
    console.log(lastChecked);
}

checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck));
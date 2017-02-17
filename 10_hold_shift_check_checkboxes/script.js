const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
//console.log(checkBoxes);

let lastChecked;

function handleCheck(e) {
    // 1. check if the shift key was down
    // 2. check if the check is being checked not uncheking
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // loop over every single checkbox
        checkBoxes.forEach(checkBox => {
            console.log(checkBox);
            if (checkBox === this || checkBox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkBox.checked = true;
            }
        });
    }
    
    
    lastChecked = this;
}

checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck));
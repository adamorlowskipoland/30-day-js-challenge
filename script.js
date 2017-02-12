const inputs = document.querySelectorAll(".controls input"); // catches all the inputs

function upDate() {
    const inputSizing = this.dataset.sizing || ""; // assigning "px" or "nothing" Will be needed to assign value "px" for spacing and blur, "nothing" for color
    
    document.documentElement.style.setProperty(`--${this.name}`, this.value + inputSizing);
}



//  another way of working function NOTE: big minus is if we have a lot of inputs on the page, then we'd need to add a lot of "ifs" or write a switch
//function upDate() {
     
//    if (this.name == "blur" || this.name == "spacing") {
//        document.documentElement.style.setProperty(`--${this.name}`, this.value + "px");
//    } else {
//        document.documentElement.style.setProperty(`--${this.name}`, this.value);
//        
//    }  
//}


inputs.forEach(input => input.addEventListener("change", upDate));
inputs.forEach(input => input.addEventListener("mousemove", upDate));
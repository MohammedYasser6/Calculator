const btns = document.querySelectorAll(".button");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");
const display = document.querySelector(" .calculator-screen-two");
const equal = document.querySelector(".calculator-screen");

btns.forEach((btn) => {
    btn.addEventListener("click", function(){
        if (btn.innerText === "=") return;
        if (btn.innerText === "clear") return;
        display.innerHTML += btn.innerText;
        
    });
    
});
clearBtn.addEventListener("click" ,function(){
    display.innerHTML = ""
    equal.innerHTML = ""

})

equalBtn.addEventListener("click" ,function(){
     const res = eval(display.innerHTML)
    
     if(res === Infinity){
        equal.innerHTML = "Error";
        return;
     }
     equal.innerHTML =res;
})

<<<<<<< HEAD
const btns = document.querySelectorAll(".calculator-main__body .button");
const clearBtn = document.querySelector(".calculator-main__body .clear");
const equalBtn = document.querySelector(".calculator-main__body .equal");
const display = document.querySelector(".calculator-main__body .calculator-screen-two");
const equal = document.querySelector(".calculator-main__body .calculator-screen");
const del = document.querySelector(".calculator-main__body .del");

const MAX_LENGTH = 15;




btns.forEach((btn) => {

    
    btn.addEventListener("click", function(){
        if (display.innerHTML.length >= MAX_LENGTH) return;
        
        

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
     const res = eval(display.innerHTML).toFixed(2)
     
     if(eval(display.innerHTML) === Infinity){
        equal.innerHTML = "Error";
        return;
     }
     
     equal.innerHTML =res;
     
})


del.addEventListener("click" ,function(){
    display.innerHTML = display.innerHTML.slice(0,-4)
})
=======
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
>>>>>>> 2c59e7237fedb141ceca6b33ffddf29c9c2122f9

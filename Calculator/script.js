let boxes=document.querySelectorAll(".box");
let output=document.querySelector("#output");
let display=document.querySelector("#display");
let operators=document.querySelectorAll(".operators");

let nums="";
Array.from(boxes).forEach((box)=>{  // an array of boxes is created and for each box, an event listener is added
    box.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){  
            nums=eval(nums);  // eval() is a function that evaluates the expression
            output.innerText=nums;  // to display the result on the screen
        }
        else if(e.target.innerText=="C"){
            nums="";
            display.value=nums;
            output.innerText="0";  // to clear the screen 
        }
        else if(e.target.innerText=="X"){
            nums=nums.slice(0,-1);  // to remove the last character
            display.value=nums;
        }
        else if(e.target.innerText=="x²"){
            let num=parseFloat(display.value); // Convert string to number so that squaring can be done
            nums=Math.pow(num, 2);
            display.value=`sqr(${num})`;
            output.innerText=nums;
        }
        else if(e.target.innerText=="√x"){
            let num=parseFloat(display.value); // Convert string to number
            nums=Math.sqrt(num);
            display.value=`√${num}`;
            output.innerText=nums;
        }
        else{
            nums+=e.target.innerText; 
            display.value=nums;
            if(e.target.innerText=='+' || e.target.innerText=='-' || e.target.innerText=='*' || e.target.innerText=='/' || e.target.innerText=='.'){
                disable_btns();  // disables the operators after clicked on
            }
            else{
                enable_btns();  // when any other button is clicked, the operators buttons are enabled back
            }
        }
        
    });
});

const disable_btns=()=>{
    for(let boxes of operators){
        boxes.disabled=true;
    }
};

const enable_btns=()=>{
    for(let boxes of operators){
        boxes.disabled=false;
    }
};

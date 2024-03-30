let boxes=document.querySelectorAll(".box");
let output=document.querySelector("#output");
let display=document.querySelector("#display");
let operators=document.querySelectorAll(".operators");

let nums="";
Array.from(boxes).forEach((box)=>{  // an array of boxes is created and for each box, an event listener is added
    box.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
            if(nums[0]=='+' || nums[0]=='-' || nums[0]=='*' || nums[0]=='/' || nums[nums.length-1]=='+' || nums[nums.length-1]=='-' || nums[nums.length-1]=='*' || nums[nums.length-1]=='/'){
                nums="Error";
            }
            else{
                nums=eval(nums);  // eval() is a function that evaluates the expression
            }  
            output.innerText=nums;  // to display the result on the screen
        }
        else if(e.target.innerText=="C"){
            nums="";
            display.value=nums;
            output.innerText="0";  // to clear the screen 
            enable_btns();
        }
        else if(e.target.innerText=="X"){
            nums=nums.slice(0,-1);  // to remove the last character
            display.value=nums;
            enable_btns();
        }
        else if(e.target.innerText=="x²"){
            let num;
            if(output.innerText=="0"){
                num=parseFloat(display.value);  // if we directly want to find the square of a number
            }
            else{
                num=parseFloat(output.innerText); // if we want to find the square after some operations
            }
            nums=Math.pow(num, 2);
            display.value=`sqr(${num})`;
            output.innerText=nums;
        }
        else if(e.target.innerText=="√x"){
            let num;
            if(output.innerText=="0"){
                num=parseFloat(display.value);  // if we directly want to find the square root of a number
            }
            else{
                num=parseFloat(output.innerText); // if we want to find the square root after some operations
            }
            nums=Math.sqrt(num);
            display.value=`√${num}`;
            output.innerText=nums;
        }
        else{
            nums+=e.target.innerText; 
            display.value=nums;
            if(e.target.innerText=='+' || e.target.innerText=='-' || e.target.innerText=='*' || e.target.innerText=='/' || e.target.innerText=='.'){
                disable_btns();
            }
            else{
                enable_btns();
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

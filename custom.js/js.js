
let value;
num=""
let display = document.getElementById("display");


function check(num){
    len=num.length
    for(let i=0;i<len-1;i++){
        if (isNaN(num[0]) || isNaN(num[len+1])){
            display.innerHTML ="Wrong Input";
        }else if (isNaN(num[i])) {
            display.innerHTML ="Wrong Input 2";
        }
    
    } 
}

let myevent= document.addEventListener("click", function(e){
    value =e.target.innerText
    // return value
    if (value=="="){
        check(num)
        console.log(num);
        console.log(eval(num));
        display.innerHTML=eval(num)
        num=eval(num)
    }
    else if(value =="x"){
        num+="*";
        display.innerHTML=num
    }
    else if(value =="B"){
        num = num.toString();
        num=num.slice(0,num.length-1);
        display.innerHTML=num
    }
    else if(value=="C"){
        num=""
        display.innerHTML=num

    }
    else if(isNaN(value)==false ||  value== "+" || value== "/" || value== "-" || value== "%"){
        num+=value;
        display.innerHTML=num
    }
    // else(
    //     display.innerHTML=num
    // )
    
},false)



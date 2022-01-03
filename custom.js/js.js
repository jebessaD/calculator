
let value;
num=""
let display = document.getElementById("display");

let myevent= document.addEventListener("click", function(e){
    value =e.target.innerText
    // return value
    if (value=="="){
        check(num)
        console.log(num);
        console.log(eval(num));
        display.innerHTML=eval(num)
        num=""
    }
    else if(value =="x"){
        num+="*";
        display.innerHTML=num
    }
    else{
        num+=value;
        display.innerHTML=num
    }
    
},false)

function check(num){

    for(let i=0;i<num.length;i++){
        console.log["h"]
    }
    
}



// while (count<5){
//     count+=1;
//     console.log( myevent());
// }


// console.log("uuu");
// while (false){
//     if (isNaN(value)){
//         if (value==='x'){
//             // let multiply();
//             console.log("m");
//         }
//         else if (value==='+'){
//             // let add();
//             console.log("a");
//         }
//         else if (value==='-'){
//             // let minus();
//             console.log("s");
//         }
//         else{
//             // let divide();
//             console.log("d");
//         }
        

// }
// else{
//     console.log(value);
    
// }
// }

        

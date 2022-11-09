//TO do: Make M+ M- and MC functional


let string=" ";

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML== "Ans"){
            string=eval(string)
            document.querySelector("input").value =string;
        }
        else if(e.target.innerHTML== "C"){
            string="";
            document.querySelector("input").value =string;
        }
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector("input").value =string;
        }
        
    })
})

function pi(){
    screen.value=3.14159265359;
}



// function fact(){
//      var i,num,f;
//      f=1;
//      num=screen.value
//      for (let i = 0; i <=num; i++) {
//         f=f*1; 
//      }
//      i=i-1;
//      screen.value=f;
// }
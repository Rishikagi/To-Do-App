let string = "";
let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click",(e)=>{
    try {
        if(e.target.innerHTML == "=" ){
            string = eval(string);
            input.value = string;
        }
    
       
        else if(e.target.innerHTML == "AC" ){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML =="DEL"){
            if(string.length>0){
                string = string.substring(0 ,string.length -1);
                input.value = string;
            }
          
        }
        else{
            string = string + e.target.innerHTML;
            input.value = string;
            // console.log(e.target);
        }} catch (error) {
            input.value = "ERROR";
            
        }
        
        
    })
    
});
      
       
        
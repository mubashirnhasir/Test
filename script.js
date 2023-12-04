let string = "";
let input = document.querySelector(".input")
let button = document.querySelectorAll(".btn");
Array.from(button).forEach((button)=>{
  button.addEventListener("click",(e)=>{
    if(e.target.innerHTML == "="){
        // console.log("hello")
      string = eval(string);
      console.log(string)
      input.value = string;
    }
    else if(e.target.innerHTML == "AC"){
        string = "";
        input.value = string;
    }
    else if(e.target.innerHTML == "DE"){
        
    }

    else{
      string = string + e.target.innerHTML;
    //   console.log(string)
      input.value = string;
    }
  })
})

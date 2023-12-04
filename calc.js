const input = document.querySelector(".input")
let string = "";
const btn = document.querySelectorAll(".btn");

Array.from(btn).forEach((btn)=>{
    input.value = ""
    btn.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string).toFixed(5)
            document.querySelector(".input").value = string
            
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector(".input").value = string;
        }
        else{
            string += e.target.innerHTML
            document.querySelector(".input").value = string;
            input.style.color = "#e3f6f5"
        }
    })
})
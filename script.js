let mainno=Math.floor(Math.random()*100)+1;

let guessno=document.getElementById("numip");

let p=document.querySelector("p")

let form=document.querySelector("form")


let div=document.querySelector("div")


form.addEventListener("submit",function(e){
    e.preventDefault();
        
    let guess=guessno.value;
    guessno.value="";
    div.innerHTML="";
    let p1=document.createElement("p")
    let ul=document.createElement("p")
    p1.textContent="Feedback:"
    if(guess==mainno){
        ul.textContent="You Win"
    }else if(guess>mainno){
        ul.textContent="Your Number is Larger"
    }else{
        ul.textContent="Your Number is Smaller"
    }



    div.append(p1,ul);
})
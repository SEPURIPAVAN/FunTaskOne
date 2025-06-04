let mainno=Math.floor(Math.random()*100)+1;

let guessno=document.getElementById("numip");
let p=document.querySelector("p")
let form=document.querySelector("form")

let clickcount=0

let div=document.querySelector("div")

form.addEventListener("submit",function(e){
    e.preventDefault();
    
    clickcount+=1;
    let guess=guessno.value;
    guessno.value="";
    div.innerHTML="";
    let p1=document.createElement("p")
    let p2=document.createElement("p")
    let p3=document.createElement("p")
    let p4=document.createElement("p")
    p1.textContent="Feedback:"
    if(guess==mainno){
        p2.textContent="You Win"
    }else if(guess>mainno){
        p2.textContent="Your Number is Larger"
    }else{
        p2.textContent="Your Number is Smaller"
    }
    p3.textContent="No of attemps:";
    p4.textContent=clickcount;

    div.append(p1,p2,p3,p4);
})
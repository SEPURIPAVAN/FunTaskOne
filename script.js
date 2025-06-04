let mainno=Math.floor(Math.random()*100)+1;

let guessno=document.getElementById("numip");
let p=document.querySelector("p")

let form=document.querySelector("form")

let body=document.querySelector("body")
let div=document.querySelector("div")


form.addEventListener("submit",function(e){
    e.preventDefault();

    let guess=guessno.value;

    let p1=document.createElement("p")
    let ul=document.createElement("ul")
    let li1=document.createElement("li")
    let li2=document.createElement("li")
    
    p.innerHTML=`<p>FeedBack:</p>`
    li1.textContent=guess;
    li2.textContent=mainno;
    div.append(ul,li1,li2);
})
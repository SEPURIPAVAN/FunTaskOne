//try keyboard events
//instrad of refresing page to replay, do it manually


//nav bar
fetch("nav.html")
    .then(res=>res.text())
    .then(html=>{
        document.getElementById("navbar").innerHTML=html;
    })

//font
fetch("head.html")
    .then(res => res.text())
    .then(html => {
        document.head.innerHTML = html;
    });

    
/*single player*/

let mainNo=Math.floor(Math.random()*100)+1;


let guessNo=document.getElementById("numip");
let btnguess=document.getElementById("guessedNo")
let replay=document.getElementById("replay")
let div1=document.getElementById("div1")
let form=document.getElementById("singleForm")


if(btnguess){

let clickcount=0
form.addEventListener("submit",function(e){
    e.preventDefault();

    
    
    clickcount+=1;
    let guess=guessNo.value;
    guessNo.value="";
    div1.innerHTML="";
    let p1=document.createElement("p")
    let p2=document.createElement("p")
    let p3=document.createElement("p")
    let p4=document.createElement("p")
    p1.textContent="Feedback:"
    if(guess==mainNo){
        p2.textContent="You Win"
        
        guessNo.disabled=true;
        btnguess.disabled=true;
        replay.style.display="inline-block";
        replay.focus();

    }else if(guess>mainNo){
        p2.textContent="Your Number is Larger"
    }else{
        p2.textContent="Your Number is Smaller"
    }
    p3.textContent="No of attemps:";
    p4.textContent=clickcount;

    div1.append(p1,p2,p3,p4);
})

replay.addEventListener("click",()=>{
    location.reload();
})
}

/* Multiple player*/

let winner=document.getElementById("winner")
let numip1=document.getElementById("numip1")
let numip2=document.getElementById("numip2")

let form1=document.getElementById("multiple1")
let form2=document.getElementById("multiple2")

let feed1=document.getElementById("feed1")
let feed2=document.getElementById("feed2")

let btng1=document.getElementById("btng1")
let btng2=document.getElementById("btng2")

let multireplay=document.getElementById("multireplay")

let currentplayer=1;

let clickcount1=0
let clickcount2=0

    numip1.disabled=false;
    btng1.disabled=false;
    numip2.disabled=true;
    btng2.disabled=true;

    numip1.focus();

function switchplayer(){
    if(currentplayer ==1){
        currentplayer=2;
        
        numip1.disabled=true;
        btng1.disabled=true;
        numip2.disabled=false;
        btng2.disabled=false;
        numip2.focus();
    }else{
        currentplayer=1;
        
        numip1.disabled=false;
        btng1.disabled=false;
        numip2.disabled=true;
        btng2.disabled=true;
        numip1.focus();
    }
}

function showWinner(win,attempts){
    numip1.disabled = true;
    btng1.disabled = true;
    numip2.disabled = true;
    btng2.disabled = true;



    winner.style.display="block";
    document.getElementById("winMsg").textContent=`${win} is the winner`
    document.getElementById("winAttempts").textContent=`${attempts} attempts`
    multireplay.style.display="block";
    multireplay.focus();

    
}

form1.addEventListener("submit",function(e){
    e.preventDefault();
    if(currentplayer !=1) 
        return;

    clickcount1+=1;

    multiguessed1=numip1.value;
    numip1.value="";
    feed1.innerHTML="";

    let p1=document.createElement("p")
    let p2=document.createElement("p")
    let p3=document.createElement("p")
    let p4=document.createElement("p")
    p1.textContent="Feedback:"

    if(mainNo==multiguessed1){

        p2.textContent="You Win"
        numip1.disabled=true;
        btng1.disabled=true;
        numip2.disabled=true;
        btng2.disabled=true;
        
        showWinner("Player 1",clickcount1)
    }else if(multiguessed1>mainNo){
        p2.textContent="Your Number is Larger"
        switchplayer();
    }else{
        p2.textContent="Your Number is Smaller"
        switchplayer();
    }
    p3.textContent="No of attemps:";
    p4.textContent=clickcount1;

    feed1.append(p1,p2,p3,p4)
})

form2.addEventListener("submit",function(e){
    e.preventDefault();

    if(currentplayer !=2) 
        return;

    clickcount2+=1;

    multiguessed2=numip2.value;
    numip2.value="";
    feed2.innerHTML="";

    let p1=document.createElement("p")
    let p2=document.createElement("p")
    let p3=document.createElement("p")
    let p4=document.createElement("p")
    p1.textContent="Feedback:"

    if(mainNo==multiguessed2){

        p2.textContent="You Win"
        
        numip2.disabled=true;
        btng2.disabled=true;
        numip1.disabled=true;
        btng1.disabled=true;

       showWinner("Player 2",clickcount2)
        
    }else if(multiguessed2>mainNo){
        p2.textContent="Your Number is Larger"
        switchplayer();
    }else{
        p2.textContent="Your Number is Smaller"
        switchplayer();
    }
    p3.textContent="No of attemps:";
    p4.textContent=clickcount2;

    feed2.append(p1,p2,p3,p4)
})

multireplay.addEventListener("click",()=>{
    location.reload();
})
setTimeout(()=>{

loading.style.display="none";

},2000);

const text="Hai Nikmol ❤️";

let i=0;

function type(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(type,150);

}

}

function login(){

const pass=document.getElementById("password").value;

if(pass==="028028"){

login.style.display="none";

main.style.display="flex";

document.getElementById("music").play();

type();

heart();

}else{

error.innerHTML="Password Salah 😢";

}

}

function openLetter(){

letter.style.display="flex";

}

function closeLetter(){

letter.style.display="none";

}

function heart(){

setInterval(()=>{

const h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="absolute";

h.style.left=Math.random()*100+"vw";

h.style.top="100vh";

h.style.fontSize=Math.random()*30+20+"px";

h.style.animation="love 6s linear";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},6000);

},250);

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes love{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(-120vh);
opacity:0;
}
}
`;

document.head.appendChild(style);

const yes=document.getElementById("yesBtn");

const no=document.getElementById("noBtn");

let kabur=0;

yes.onclick=()=>{

alert("Makasih ya Nikmol ❤️");

confetti();

}

no.onmouseover=()=>{

kabur++;

const x=Math.random()*70;

const y=Math.random()*70;

no.style.position="fixed";

no.style.left=x+"vw";

no.style.top=y+"vh";

if(kabur>10){

no.innerHTML="Iya deh ❤️";

no.style.background="hotpink";

}

}

function confetti(){

for(let i=0;i<150;i++){

const c=document.createElement("div");

c.innerHTML="🎉";

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize=Math.random()*20+20+"px";

c.style.animation="fall 4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},4000);

}

}

setInterval(()=>{

const s=document.createElement("div");

s.innerHTML="🌸";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top="-50px";

s.style.fontSize=Math.random()*20+15+"px";

s.style.animation="sakura 8s linear";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},8000);

},400);
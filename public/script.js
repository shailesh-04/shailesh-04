var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
});

// // ===== scroll sections avtive Link =====
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
var srollCount = 0;
for(let i=0; i<5; i++){
  let el = document.createElement('div');
  el.classList.add('bgBox');
  el.style.width=Random(5,10)+"rem";
  el.style.height=Random(5,10)+"rem";
  el.style.top=Random(1,100)+"%";
  el.style.left=Random(1,100)+"%";
  el.style.backgroundColor="rgb("+Random(1,255)+","+Random(1,255)+","+Random(1,255)+","+Random(1,255)+")";
  sections[0].append(el);
}
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  
  if(srollCount <= window.scrollY){
    document.querySelector(".header").style.top="-10rem";
    srollCount = window.scrollY;
  }
  else{
    document.querySelector(".header").style.top="0rem";
    srollCount = window.scrollY;
  }
  
  navBar.classList.remove('nav-open');
  openBtn.classList.remove('bx-x');
};

//===============Nav Open And Close=================//

const openBtn = document.getElementById("manu-icon");
const navBar = document.querySelector('.nav-bar');

openBtn.onclick = () => {
   openBtn.classList.toggle('bx-x');
   navBar.classList.toggle('nav-open');
};
  
//============== for Generate Randome N8mber==========//  
function Random(min,max){
	max++;
	var randomNum = (Math.random()*(max-min))+min;
	randomNum = Math.floor(randomNum); 
	return randomNum;
}
const AnimName = document.querySelector('.AnimName');
const text = ["App Developer","Full Stack Web Developer","Game Desingner","Web Developer",];
var i=0;
var myInterval = setInterval(function() {
  AnimName.style.transform="rotateX(10deg)";
    var myTimeout = setTimeout(function() {
      AnimName.style.transform="rotateX(140deg)";
      // AnimName.innerHTML = text[i];
    },1000);
  if(++i>text.length-1)
    i=0;
}, 2000);

let menu=false;

document.querySelector(".navbar img").addEventListener("click",()=>{
  if (!menu){
  document.querySelector(".menu").innerHTML=`
  <div class="nav">
  <div class="home">Home</div>
  <div class="workshop">Workshop</div>
  <div class="perform">Performation</div>
  <div class="about">about</div>
  </div>
`
gsap.from(".nav div",{
  y:-90,
  stagger:0.2,
  ease:"power3.out",
  duration:1,
 

}) 
menu=true;}
else{

  gsap.to(".nav div",{
  y:-90,
  stagger:0.2,
  ease:"power3.out",
  duration:1,
  onComplete:()=>{
 document.querySelector(".menu").innerHTML=``
  }
})
menu=false;
}
})

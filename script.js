
const video = document.getElementById("video");

video.addEventListener("loadedmetadata", () => {

  gsap.to(video, {
    currentTime: video.duration,
    ease: "none",
    scrollTrigger: {
      trigger: video,
      start: "top top",
      end: "+=7000",
      scrub: true,
      pin: true,
    
    }
  });

});
let menu=false;

document.querySelector(".navbar img").addEventListener("click",()=>{
  if (!menu){
  document.querySelector(".menu").innerHTML=`
  <div class="nav">
  <div class="home"><a href="index.html">Home</a></div>
  <div class="workshop"><a href="../experience/experience.html">Workshop</a></div>
  <div class="perform"><a href="./newlaunch/newlaunch.html">NEW Launch </a></div>

  <div class="about"><a href="#aboutsection">about</a></div>
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

window.addEventListener("wheel",(e)=>{
if(e.deltaY>0){
  gsap.to(".band",{
    transform:'translateX(0%)',
  duration:3,
  ease:"none",
  repeat:-1
  })
    gsap.to(".band img",{
    rotate:0,
  })
console.log(e.deltaY)
}
else{
   gsap.to(".band",{
    transform:'translateX(-200%)',
  duration:3,
  ease:"none",
   repeat:-1

  })
  gsap.to(".band img",{
    rotate:180,
  })
}

})
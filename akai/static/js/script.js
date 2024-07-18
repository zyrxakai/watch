
function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()



gsap.to("#page>video",{
  scrollTrigger:{
      trigger:`#page>video`,
      // start:`1% top`,
      end:`bottom top`,
      // markers:true,
      scroller:`#main`
  },
  onStart:()=>{
      document.querySelector("#page>video").play()
  }
});


gsap.to("#page2>video",{
  scrollTrigger:{
      trigger:`#page2>video`,
      start:`1% top`,
      end:`bottom top`,
      // markers:true,
      scroller:`#main`
  },
  onStart:()=>{
      document.querySelector("#page2>video").play()
  }
});



let t1 = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2}});
let flagPoles = CSSRulePlugin.getRule(".para")

t1.to('h1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y:0, delay: 3 })
.to('.from', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0%, 0%)', opacity: 1, y: 0}, )

const observer = new IntersectionObserver((items)=>{
items.forEach(item => {
  if(item.isIntersecting && item.target.classList.contains('hidden-image')){
    item.target.classList.add('show-image')
  }
 
})
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach(element => observer.observe(element))



document.addEventListener("mousemove", function (details) {
document.querySelectorAll(".slide").forEach((elem) => {
    var x = (window.innerWidth - details.clientX * 15) / 50;

    elem.style.transform = `translateX(${-x}px)`
});
});


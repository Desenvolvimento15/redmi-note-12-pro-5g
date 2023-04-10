gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
tl.to(".pin-spacer",5,{x:-window.innerWith})

ScrollTrigger.create({
    Animation: tl,
    trigger:".pin-spacer",
    start:"center center",
    end:"+=4000",
    scrub:true,
    pin:true
})
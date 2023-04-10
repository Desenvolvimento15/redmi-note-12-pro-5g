gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".img-box").forEach(section => {
	let tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "center center",
   // faz com que a altura da rolagem (durante a fixação) coincida com a largura, assim a velocidade permanece constante (vertical/horizontal)
				end: () => "+=" + section.offsetWidth, 
				scrub: true,
				pin: true,
                anticipatePin: 3,
			},
			defaults: {ease: "none"}
		});
	// animate the container one way...
	tl.fromTo(section.querySelector(".image90"), { xPercent: 100, x: 0}, {xPercent: 0})
	  // ...and the image the opposite way (at the same time)
	  .fromTo(section.querySelector(".image90 img"), {xPercent: 0, x: 0}, {xPercent: 0}, 0);
});
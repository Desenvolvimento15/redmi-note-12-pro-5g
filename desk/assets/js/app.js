gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".img-box").forEach(section => {
	let tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "-20% top",
                end: "100% top",
				scrub: true,
				pin: true,
                anticipatePin: 3,
			},
			defaults: {ease: "none"}
		});
	
	tl.fromTo(section.querySelector(".image90"), {xPercent: -105, x:0}, {xPercent: 0})
	  .fromTo(section.querySelector(".image91"), {xPercent: -105, x:0}, {xPercent: 0},0);
});
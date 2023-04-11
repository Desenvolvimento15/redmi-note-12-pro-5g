gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".section02").forEach(div => {

	let tl = gsap.timeline({
		    duration: 1,
			scrollTrigger: {
			trigger: div,
			start: "top top",
			end: "100% top",
			pin: !0,
            scrub: !0,
			anticipatePin: 3,
			},
		
			
		});
	
		tl.to(".section02 .div43", { opacity: 1 })
		.to(".section02 .div50", { opacity: 1 })
		.to(".section02 .div53", { opacity: 1 })

});

gsap.utils.toArray(".img-box").forEach(section => {

	let tl = gsap.timeline({
		    
			scrollTrigger: {
			trigger: section,
			start: "-30% top",
			end: "100% top",
			scrub: true,
			pin: true,
			anticipatePin: 3,
			},
			defaults: {ease: "none"}
		});
	
	    tl.from(section.querySelector(".image90"), {xPercent: -105, x:0}, {xPercent: 0})
	      .from(section.querySelector(".image91"), {xPercent: -105, x:0}, {xPercent: 0}, 0);
});

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".div116").forEach(section => {

	let tl = gsap.timeline({
		    duration: 1,
			scrollTrigger: {
			trigger: section,
			start: "20% top",
			end: "100% top",
			pin: !0,
            scrub: !0,
			anticipatePin: 3,
			},
			defaults: {ease: "none"}
			
		});
	
	    tl.from(".image123", { x: "0", y: "0" });

});


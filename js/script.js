// JavaScript Document
gsap.registerPlugin(ScrollTrigger);

gsap.from("h1", {duration: 3, opacity: 0, ease: "power2", stagger: 0.2, });

function init(){
	
	gsap.from(".icon", {opacity: 0, duration: 2, scrollTrigger: {
		trigger: ".icon",
		start: "top bottom",
		end: "bottom bottom",
		scrub: 1,
		}
	 });
	
	const h3 = gsap.utils.toArray("h3");
	h3.forEach(h3 => {
		gsap.from(h3, {
			opacity: 0,
			duration: 2,
			yPercent: 30,
			scrub: 1.5,
			scrollTrigger: {
				trigger: h3,
				start: "top bottom-=10%",
				end: "top center",
				toggleActions: "play none none reverse",
			}
		})
	});
	
	const h4 = gsap.utils.toArray("h4");
	h4.forEach(h4 => {
		gsap.from(h4, {
			opacity: 0,
			duration: 2,
			yPercent: 30,
			scrub: 1.5,
			scrollTrigger: {
				trigger: h4,
				start: "top bottom-=10%",
				end: "top center",
				toggleActions: "play none none reverse",
			}
		})
	});
			
	const foodname = gsap.utils.toArray(".foodname");
	foodname.forEach(foodname => {
		gsap.from(foodname, {
			opacity: 0,
			duration: 3,
			delay: 0.3,
			yPercent: 30,
			scrollTrigger: {
				trigger: foodname,
				start: "top bottom-=10%",
				end: "top center",
				toggleActions: "play none none reverse",
			}
		})
	});
	
	const fooddesc = gsap.utils.toArray(".fooddesc");
	fooddesc.forEach(fooddesc => {
		gsap.from(fooddesc, {
			opacity: 0,
			duration: 3,
			delay: 0.5,
			yPercent: 20,
			scrollTrigger: {
				trigger: fooddesc,
				start: "top bottom-=10%",
				end: "top center",
				toggleActions: "play none none reverse",
			}
		})
	});

	

	
} //init

window.addEventListener('load', function(){
    init();
});
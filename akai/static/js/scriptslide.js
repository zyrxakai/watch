// const { ScrollTrigger } = require("gsap/all");



// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", function (){
//     const footer = document.querySelector(".footer");
//     const lastCard = document.querySelector(".card.scroll");
//     const pinnedSections = gsap.utils.toArray(".pinned");

//     pinnedSections.forEach((section, index, sections) => {
//         let img = section.querySelector(".img");

//         let nextSection = sections[index + 1] || lastCard;
//         let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;

//         gsap.to(section, {
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top top",
//                 end: 
//                 index === sections.length
//                 ? `+=${lastCard.offsetHeight / 2}`
//                 : footer.offsetTop - window.innerHeight,
//                 pin: true,
//                 pinSpacing: false,
//                 scrub: 1,
//             },
//         });

//         gsap.fromTo(
//             img,
//              {scale: 1}, 
//              {
//             scale: 0.5,
//             ease: "none",
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top top",
//                 end: endScalePoint,
//                 scrub: 1,
//             },
//         }
//     );
//     });

//     const heroH1 = document.querySelector(".hero h1");
//     ScrollTrigger.create({
//         trigger: document.body,
//         start: "top top",
//         end: "+=400vh",
//         scrub: 1,
//         onUpdate: (self) => {
//             let opacityProgress = self.progress;
//             heroH1.style.opacity = 1 - opacityProgress;
//         },
//     });
// });

// const { Observer } = require("gsap lenis/all");

// document.addEventListener("DOMContentLoaded", function () {
//     const lenis = new Lenis();

//     lenis.on("scroll", ScrollTrigger.update);

//     gsap.ticker.add((time) => {
//         lenis.raf(time * 1000);
//     });

//     gsap.ticker.lagSmoothing(0);

//     const services = gsap.utils.toArray(".service");

//     const observerOptions = {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.1,
//     };

//     const observerCallback = (entries, observer) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 const service = entry.target;
//                 const imgContainer = service.querySelector(".img");

//                 ScrollTrigger.create ({
//                     trigger: service,
//                     start: "bottom bottom",
//                     end: "top top",
//                     scrub: true,
//                     onUpdate: (self) => {
//                         let progress = self.progress;
//                         let newWidth = 30 + 70 * progress;
//                         gsap.to(imgContainer, {
//                             width: newWidth + "%",
//                             duration: 0.1,
//                             ease: "none",
//                         });
//                     }
//                 });

//                 ScrollTrigger.create({
//                     trigger: service,
//                     start: "top bottom",
//                     end: "top top",
//                     scrub: true,
//                     onUpdate: (self) => {
//                         let progress = self.progress;
//                         let newHeight = 150 + 300 * progress;
//                         gsap.to(service, {
//                             height: newHeight + "px",
//                             duration: 0.1,
//                             ease: "none",
//                         });
//                     },
//                 });

//                 observerCallback.unobserve(service);
//             }
//         });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);

//     services.forEach((service) => {
//         observer.observe(service);
//     });
// });

// $(function () {

// 	'use strict';


// 	//Lenis Smooth scroll
// 	const lenis = new Lenis({
// 		duration: 1.2
// 	})

// 	lenis.on('scroll', (e) => {
// 		console.log(e)
// 	})
// 	function raf(time) {
// 		lenis.raf(time)
// 		requestAnimationFrame(raf)
// 	}
// 	requestAnimationFrame(raf)

// 	//Integration Lenis on GSAP ScrollTrigger
// 	lenis.on('scroll', ScrollTrigger.update)

// 	gsap.ticker.add((time) => {
// 		lenis.raf(time * 1000)
// 	})

// 	//Create animation ScrollTrigger
// 	function scrollTrig() {

// 		gsap.registerPlugin(ScrollTrigger);

// 		let gsapBl = $('.gsap__bl').width();

// 		//On full width
// 		// $('.gsap__item').css('width', gsapBl + 'px');

// 		//Transform slider track
// 		let gsapTrack = $('.gsap__track').width();
// 		let scrollSliderTransform = gsapTrack - gsapBl

// 		//Create ScrollTrigger
// 		let scrollTween = gsap.to('.gsap__track', {
// 			scrollTrigger: {
// 				trigger: '.gsap_slider',
// 				start: 'center center',
// 				end: () => '+=' + gsapTrack,
// 				pin: true,
// 				scrub: true
// 			},
// 			x: '-=' + scrollSliderTransform + 'px',
//             ease: 'none'
// 		});

//         const gsapItem = gsap.utils.toArray('.gsap__item');
//         gsapItem.forEach((gsIt) => {

//             const itemImg = $(gsIt).find('.gsap__item-img');
//             gsap.to(itemImg, {
//                 x:0,
//                 ease: 'none',
//                 scrollTrigger:{
//                     trigger: gsIt,
//                     start: 'top bottom',
//                     end: 'bottom top',
//                     containerAnimation: scrollTween,
//                     scrub: true
//                 }
//             })
//         });

// 	}
// 	scrollTrig();

// 	//resize window
// 	const debouncedResize = _.debounce(onWindowResize, 500);
// 	function onWindowResize() {
// 		console.log('Window resized!');
// 		location.reload();
// 	}
// 	$(window).on('resize', debouncedResize);
// });

document.addEventListener("DOMContentLoaded", function () {

	'use strict';



	Splitting();
	luxy.init();
	gsap.registerPlugin(ScrollTrigger);

	const gTl = gsap.timeline();
	gTl.from(".title .char", 1, { opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out" });
	gTl.to(".header__img", 2, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scale: 1, ease: "expo.out" }, "-=1");
	gTl.from(".header__marq", 2, { opacity: 0, yPercent: 100, ease: "expo.out" }, "-=1.5");

	const gsapSq = gsap.utils.toArray('.section-title__square');
	gsapSq.forEach((gSq, i) => {
		const rotat = gsap.from(gSq, 3, { rotation: 720 });
		ScrollTrigger.create({
			trigger: gSq,
			animation: rotat,
			start: 'top bottom',
			scrub: 1.9
		});
	});


	//header
	function header() {
		gsap.to('.title_paralax', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			yPercent: -150
		})
		gsap.to('.header .stroke', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			xPercent: 50
		})
		gsap.to('.header__img', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			xPercent: -70
		})
		gsap.to('.header__img img', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			scale: 1.3
		})
		gsap.to('.header__marq-wrapp', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			xPercent: -50
		})
		gsap.to('.header__marq-star img', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			rotate: -720
		})
	}
	header();


	//about
	function about() {
		gsap.from('.about__img', {
			scrollTrigger: {
				trigger: '.about',
				start: 'top bottom',
				scrub: 1.9
			},
			yPercent: 80
		})
		gsap.from('.about__img img', {
			scrollTrigger: {
				trigger: '.about',
				start: 'top bottom',
				scrub: 1.9
			},
			scale: 1.6
		})
		gsap.to('.about__txt', {
			scrollTrigger: {
				trigger: '.about__wrapp',
				start: 'top bottom',
				scrub: 1.9
			},
			yPercent: 50
		})
	}
	about();


	//benefits
	function benefits() {
		gsap.from('.benefits__num', {
			x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			scrollTrigger: {
				trigger: '.benefits__list',
				start: 'top bottom',
				scrub: 1.9
			}
		})
	}
	benefits();


	//portfolio
	function portfolio() {
		gsap.from('.work__item, .work__item-num', {
			y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			scrollTrigger: {
				trigger: '.work',
				start: 'top bottom',
				scrub: 1.9
			}
		})
		gsap.from('.work__item-img img', {
			scale: 1.6,
			scrollTrigger: {
				trigger: '.work__wrapp',
				start: 'top bottom',
				scrub: 1.9
			}
		})
	}
	portfolio();


	//serv
	function serv() {
		gsap.from('.serv__item-arrow', {
			x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			scrollTrigger: {
				trigger: '.serv__list',
				start: 'top bottom',
				scrub: 1.9
			}
		})
	}
	serv();


	//footer
	function footer() {
		gsap.from('.footer__div span', {
			y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			opacity: 0,
			scrollTrigger: {
				trigger: '.footer',
				start: 'top bottom',
				end: 'bottom bottom',
				scrub: 1.9
			}
		})
	}
	footer();
});

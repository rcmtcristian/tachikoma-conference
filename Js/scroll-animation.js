import gsap from "gsap";

// export default class ScrollAnimation {
//   constructor() {
//     this.tl = gsap.timeline();
//     this.tl.from(".hero__title", {
//       duration: 1,
//       y: -100,
//       opacity: 0,
//       ease: "power4.out",
//     });
//   }
// }

export const ScrollAnimation = (position, target, isMobile, onUpdate) => {
  const tl = gsap.timeline();
  tl.to(position, {
    // 1. Move the camera to the sound section
    x: !isMobile ? -3.38 : 7.0,
    y: !isMobile ? -10.74 : -12.2,
    z: !isMobile ? -5.93 : -6.0,
    scrollTrigger: {
      trigger: ".intro-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: !isMobile ? 1.53 : 0.7,
      y: !isMobile ? 0.77 : 1.9,
      z: !isMobile ? -1.08 : 0.7,
      scrollTrigger: {
        trigger: ".intro-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".jumbotron-section", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".intro-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".intro-section-content", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".intro-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(position, {
      x: !isMobile ? 1.56 : 9.5,
      y: !isMobile ? 5.0 : 10.95,
      z: !isMobile ? 0.01 : 0.09,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: !isMobile ? -0.55 : -1.62,
      y: !isMobile ? 0.32 : 0.02,
      z: !isMobile ? 0.0 : -0.06,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".display-section", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    });
};

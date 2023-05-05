import gsap from "gsap";

export const HamburgerAnim = (timeline: gsap.core.Timeline): void => {
  timeline
    .to("#prefix__Layer_1", {
      rotate: 180,
      ease: "power1.inOut",
      duration: 0.45,
    })
    .to("#rect-one", {
      transformOrigin: "center left",
      rotate: 45,
      x: 5,
      stagger: 1,
      delay: -0.25,
    })
    .to("#rect-two", {
      transformOrigin: "center left",
      opacity: 0,
      x: 20,
      delay: -0.5,
    })
    .to("#rect-three", {
      transformOrigin: "center left",
      y: 7,
      x: 5,
      rotate: -45,
      delay: -0.75,
    });
};

export const BulbAnim = (ref: SVGSVGElement): gsap.core.Timeline => {
  const tl = gsap.timeline({ paused: true });

  tl.to(ref, {
    y: 50,
  });

  return tl;
};

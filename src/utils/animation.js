import { Power2 } from 'gsap';

export const animateWithGsapTimeline = (
  timeline, 
  rotationalRef, 
  rotationState, 
  firstTarget, 
  secondTarget, 
  animationProps
) => {

  // Rotate the model
  timeline.to(rotationalRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: Power2.inOut
  });

  // Animate the first target with the provided properties
  timeline.to(firstTarget, {
    ...animationProps,
    ease: Power2.inOut
  }, '<'); // '<' indicates that this animation starts at the same time as the previous one

  // Animate the second target with the provided properties
  timeline.to(secondTarget, {
    ...animationProps,
    ease: Power2.inOut
  }, '<'); // '<' indicates that this animation starts at the same time as the previous one
};

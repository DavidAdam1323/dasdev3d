import { useEffect } from "react";

import gsap from "gsap"; // GSAP core library for animations
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger plugin to trigger animations on scroll

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin with GSAP

/**
 * Custom hook for scroll-triggered animations using GSAP and ScrollTrigger.
 *
 * @param {RefObject} containerRef - Ref to the container DOM element
 * @param {Object} options - Animation settings
 *   @property {string} selector - CSS selector for target children
 *   @property {Object} from - Initial animation state
 *   @property {Object} to - Final animation state
 *   @property {number} stagger - Stagger delay between elements
 *   @property {number} duration - Duration of each animation
 *   @property {string} triggerStart - Scroll start position
 *   @property {boolean} once - Whether animation should only play once
 */

const useScrollReveal = (
  containerRef,
  {
    selector = "*",
    from = { opacity: 0, y: 30 },
    to = { opacity: 1, y: 0 },
    stagger = 0.3,
    duration = 1.5,
    triggerStart = "top 80%",
    once = true,
  } = {}
) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Select elements inside the container using the provided selector
    const elements = gsap.utils.toArray(container.querySelectorAll(selector));

    // Animate each element from its 'from' state to its 'to' state
    gsap.fromTo(elements, from, {
      ...to,
      duration,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: triggerStart,
        toggleActions: once ? "play none none none" : "play reverse play reverse",
      },
    });

    // Clean up ScrollTriggers on unmount
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [containerRef, selector, from, to, stagger, duration, triggerStart, once]);
};

export default useScrollReveal;

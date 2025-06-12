import gsap from "gsap";                                                // GSAP handles animations
import { ScrollTrigger } from "gsap/ScrollTrigger";                     // This plugin lets you trigger animations on scroll


// Register the ScrollTrigger plugin with GSAP (must do before using it)
gsap.registerPlugin(ScrollTrigger);


// Custom hook: useScrollReveal- this hook returns a function that applies reveal animations to a set of elements when they enter the viewport.
const useScrollReveal = () => {

  /**
   * Animate function
   * @param {RefObject} containerRef - A React ref pointing to the section or container DOM node.
   * @param {Object} options - Configuration for the reveal animation.
   */

  const animate = (
    containerRef,
    {
      selector = "*",                                                  // CSS selector for elements to animate within the container
      from = { opacity: 0, y: 30 },                                    // Initial animation state (e.g., hidden and slightly below)
      to = { opacity: 1, y: 0 },                                       // Final animation state (e.g., visible and in place)
      stagger = 0.3,                                                   // Delay between each element's animation start
      duration = 1.5,                                                  // Duration of each animation
      triggerStart = "top 80%",                                        // When to trigger the animation relative to viewport
      once = true,                                                     // If true, animation runs only once; otherwise, re-triggers on scroll
    } = {}
  ) => {
    const container = containerRef.current;
    if (!container) return; // Exit if the container doesn't exist yet

    // Select all target elements inside the container based on the selector
    const elements = gsap.utils.toArray(container.querySelectorAll(selector));

    // Apply the GSAP fromTo animation with ScrollTrigger
    gsap.fromTo(
      elements,
      from,
      {
        ...to,
        duration,
        stagger,
        ease: "power2.out",                                            // Smooth easing for natural motion
        scrollTrigger: {
          trigger: container,                                          // What triggers the animation
          start: triggerStart,                                         // Scroll position to start animation
          toggleActions: once
            ? "play none none none"                                    // Run only once
            : "play reverse play reverse",                             // Re-run on scroll in and out
        },
      }
    );
  };

  return animate; // Return the animation function to be used inside your components
};

export default useScrollReveal;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./../styles/ParallaxScroll.css"; // Import CSS

gsap.registerPlugin(ScrollTrigger);

const ParallaxScroll = () => {
  const scrollElementRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    let speed = 100;
    let height = svgRef.current.getBBox().height; // Now it will work!

    gsap.set("#h2-1", { opacity: 0 });
    gsap.set("#bg_grad", { attr: { cy: "-50" } });
    gsap.set(["#dinoL", "#dinoR"], { y: 80 });
    gsap.set("#dinoL", { x: -10 });

    gsap.matchMedia().add("(max-width: 1922px)", () => {
      gsap.set(["#cloudStart-L", "#cloudStart-R"], { x: 10, opacity: 1 });
    });

    /*  SCENE 1 */
    let scene1 = gsap.timeline();
    ScrollTrigger.create({
      animation: scene1,
      trigger: scrollElementRef.current,
      start: "top top",
      end: "45% 100%",
      scrub: 3
    });

    // Hills Animation
    scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0);
    scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
    scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
    scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
    scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
    scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
    scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
    scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
    scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);

    return () => ScrollTrigger.getAll().forEach((t) => t.kill()); // Cleanup
  }, []);

  return (
    <div className="wrapper">
      <svg ref={svgRef} viewBox="0 0 1920 1080">
        {/* Copy your SVG paths here from parallax.svg */}
         <svg viewBox="0 0 750 500" preserveAspectRatio="xMidYMax slice">
    <path id="h2-1" d="M10 80 C40 10, 65 10, 95 80 S150 150, 180 80" fill="none" stroke="black" strokeWidth="3"/>
    <path id="h1-2" d="M50 50 L150 50 L100 150 Z" fill="blue"/>
    <path id="cloudStart-L" d="M100,200 C150,100 250,100 300,200 S450,300 500,200" fill="white"/>
    <path id="cloudStart-R" d="M600,200 C650,100 750,100 800,200 S950,300 1000,200" fill="white"/>
</svg>
        {/* Add all other paths */}
      </svg>
      <div className="scrollElement" ref={scrollElementRef}></div>
    </div>
  );
};

export default ParallaxScroll;

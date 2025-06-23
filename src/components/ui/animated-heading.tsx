"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

// Import GSAP plugins if needed
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  variant?: "default" | "gradient" | "shine" | "typewriter" | "split" | "flow" | "neon" | "cyber";
  speed?: number;
  delay?: number;
  // Split animation props
  splitType?: "chars" | "words" | "lines";
  from?: { opacity?: number; y?: number; x?: number; scale?: number; rotationX?: number; rotationY?: number };
  to?: { opacity?: number; y?: number; x?: number; scale?: number; rotationX?: number; rotationY?: number };
  staggerDelay?: number;
  ease?: string;
  onAnimationComplete?: () => void;
  // Color customization
  color?: string;
  gradientFrom?: string;
  gradientTo?: string;
  gradientVia?: string;
}

export function AnimatedHeading({
  text,
  className,
  variant = "default",
  speed = 0.6,  // Changed to seconds for GSAP
  delay = 0.3,  // Changed to seconds for GSAP
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  staggerDelay = 0.03,
  ease = "power3.out",
  onAnimationComplete,
  color = "white",
  gradientFrom = "from-blue-500",
  gradientTo = "to-violet-500",
  gradientVia = "via-purple-500",
}: AnimatedHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const hasAnimatedRef = useRef(false);
  
  // GSAP-based animation
  useEffect(() => {
    // Early return if no element or already animated
    if (!headingRef.current || hasAnimatedRef.current) return;
    
    // For client-side only
    if (typeof window === "undefined") return;
    
    const heading = headingRef.current;
    
    if (variant === 'split' || variant === 'flow') {
      // Use GSAP SplitText for advanced text splitting
      let splitter: SplitText;
      let elements: HTMLElement[];
      
      try {
        // Split the text based on the selected splitType
        splitter = new SplitText(heading, { 
          type: splitType as any,
          linesClass: "split-line"
        });
        
        // Get the appropriate elements based on splitType
        if (splitType === 'chars') {
          elements = splitter.chars as HTMLElement[];
        } else if (splitType === 'words') {
          elements = splitter.words as HTMLElement[];
        } else {
          elements = splitter.lines as HTMLElement[];
        }
        
        // Set initial state
        gsap.set(elements, from);
        
        // Create timeline
        const tl = gsap.timeline({
          onComplete: () => {
            hasAnimatedRef.current = true;
            onAnimationComplete?.();
          }
        });
        
        // Add animation
        tl.to(elements, {
          ...to,
          duration: speed,
          delay: delay,
          stagger: staggerDelay,
          ease: ease,
          force3D: true
        });
      } catch (error) {
        console.error("GSAP SplitText error:", error);
        
        // Fallback if SplitText fails
        gsap.fromTo(heading, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: speed, delay: delay, ease: ease }
        );
      }
    } else if (variant === 'typewriter') {
      // Create typewriter effect with GSAP
      heading.innerHTML = "";
      heading.style.borderRight = "2px solid rgb(139, 92, 246)";
      
      const chars = text.split("");
      let currentIndex = 0;
      
      const typeChar = () => {
        if (currentIndex < chars.length) {
          heading.innerHTML += chars[currentIndex];
          currentIndex++;
          setTimeout(typeChar, speed * 200);
        } else {
          // Animation complete
          heading.style.borderRight = "none";
          hasAnimatedRef.current = true;
          onAnimationComplete?.();
        }
      };
      
      // Start typing after delay
      setTimeout(typeChar, delay * 1000);
    } else {
      // Simple fade-in for other variants
      gsap.fromTo(heading, 
        { opacity: 0, y: 20 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: speed, 
          delay: delay, 
          ease: ease,
          onComplete: () => {
            hasAnimatedRef.current = true;
            onAnimationComplete?.();
          }
        }
      );
    }
    
    // Cleanup
    return () => {
      gsap.killTweensOf(heading);
    };
  }, [text, variant, speed, delay, splitType, from, to, staggerDelay, ease, onAnimationComplete]);
  
  // Get dynamic color or gradient classes based on props
  const getColorClass = () => {
    if (color && color !== "white" && !["gradient", "shine", "neon", "cyber"].includes(variant)) {
      return `text-${color}`;
    }
    return "";
  };
  
  // Different variant styles with enhanced colors
  const variantStyles = {
    default: cn("text-white", getColorClass()),
    gradient: cn(
      "bg-gradient-to-r bg-clip-text text-transparent",
      gradientFrom, 
      gradientVia, 
      gradientTo
    ),
    shine: cn(
      "relative text-white overflow-hidden before:absolute before:inset-0",
      "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
      "before:translate-x-[-100%] before:animate-[shine_2s_infinite]",
      getColorClass()
    ),
    typewriter: cn("font-mono", getColorClass()),
    split: cn("text-white", getColorClass()),
    flow: cn("text-white", getColorClass()),
    neon: cn(
      "text-white font-medium",
      "text-shadow-[0_0_5px_#fff,_0_0_10px_#fff,_0_0_15px_#0073e6,_0_0_20px_#0073e6,_0_0_25px_#0073e6]"
    ),
    cyber: cn(
      "text-[#00ffe5] font-medium uppercase tracking-wider",
      "text-shadow-[0_0_5px_rgba(0,255,229,0.7),_0_0_10px_rgba(0,255,229,0.5),_2px_2px_1px_rgba(0,0,0,0.3)]"
    ),
  };
  
  return (
    <h1 
      ref={headingRef}
      className={cn(
        "text-4xl md:text-6xl font-bold",
        variantStyles[variant],
        className
      )}
      style={{
        ...(variant === "neon" && { textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6" }),
        ...(variant === "cyber" && { textShadow: "0 0 5px rgba(0,255,229,0.7), 0 0 10px rgba(0,255,229,0.5), 2px 2px 1px rgba(0,0,0,0.3)" })
      }}
    >
      {variant !== 'typewriter' ? text : ''}
    </h1>
  );
}
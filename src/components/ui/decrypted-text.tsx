"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function DecryptedText({
  text,
  className,
  speed = 50,
  delay = 0,
}: DecryptedTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let iteration = 0;
    let interval: NodeJS.Timeout | null = null;
    let timeout: NodeJS.Timeout;
    
    // Add delay before starting animation
    timeout = setTimeout(() => {
      // Initial random text of the same length as target text
      setDisplayedText(
        Array(text.length)
          .fill(0)
          .map(() => letters[Math.floor(Math.random() * letters.length)])
          .join("")
      );
      
      // Start the decryption animation
      interval = setInterval(() => {
        setDisplayedText((current) => {
          // Create a new string by decrypting one more character each time
          return text
            .split("")
            .map((letter, index) => {
              // If the index is less than the current iteration,
              // show the actual letter, otherwise show a random letter
              if (index < iteration) {
                return text[index];
              }
              
              // For spaces, always show a space
              if (text[index] === " ") return " ";
              
              // Otherwise, show a random letter
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");
        });
        
        iteration += 0.5;
        
        // When we've decrypted the full text, clear the interval
        if (iteration >= text.length) {
          setIsDecrypting(false);
          if (interval) clearInterval(interval);
        }
      }, speed);
    }, delay);
    
    // Cleanup on unmount
    return () => {
      if (interval) clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);
  
  return (
    <div
      ref={containerRef}
      className={cn("font-mono", isDecrypting && "animate-pulse", className)}
    >
      {displayedText || text}
    </div>
  );
}
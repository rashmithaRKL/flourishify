
import { useEffect, useRef, useState } from 'react';

// Enhanced intersection observer with more options and control
export function useIntersectionObserver(options = {}) {
  const [elements, setElements] = useState<Element[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  const observer = useRef<IntersectionObserver | null>(null);

  const defaultOptions = {
    threshold: 0.1,
    root: null,
    rootMargin: '0px',
    ...options
  };

  useEffect(() => {
    if (elements.length) {
      observer.current = new IntersectionObserver((observedEntries) => {
        setEntries(observedEntries);
      }, defaultOptions);
      
      elements.forEach(element => {
        if (element) observer.current?.observe(element);
      });
    }
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements, defaultOptions.threshold, defaultOptions.root, defaultOptions.rootMargin]);

  return { 
    setElements, 
    entries 
  };
}

export function useAnimateOnScroll(options = {}) {
  const { setElements, entries } = useIntersectionObserver(options);
  
  useEffect(() => {
    // Apply animations when elements become visible
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Get animation type from data attribute or default to fade-up
        const animationType = entry.target.getAttribute('data-animation') || 'fade-up';
        entry.target.classList.add('show-element', `animation-${animationType}`);
      } else {
        // Optional: remove the class when element is out of view for replay
        // Uncomment if you want animations to replay when scrolling back up
        // const resetOnExit = entry.target.getAttribute('data-reset-on-exit');
        // if (resetOnExit === 'true') {
        //   entry.target.classList.remove('show-element');
        // }
      }
    });
  }, [entries]);

  useEffect(() => {
    // Select all elements with the animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    setElements(Array.from(animatedElements));
  }, [setElements]);

  return null;
}

// Helper to set staggered animations for child elements
export function useStaggeredAnimation(containerRef: React.RefObject<HTMLElement>, childSelector: string, delayIncrement = 100) {
  useEffect(() => {
    if (containerRef.current) {
      const children = containerRef.current.querySelectorAll(childSelector);
      
      children.forEach((child, index) => {
        // Add staggered delay based on index
        (child as HTMLElement).style.transitionDelay = `${index * delayIncrement}ms`;
      });
    }
  }, [containerRef, childSelector, delayIncrement]);
}

// Parallax scroll effect hook
export function useParallaxScroll(ref: React.RefObject<HTMLElement>, speed = 0.5) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const elementOffset = element.offsetTop;
      const distance = scrollTop - elementOffset;
      
      // Apply parallax transform only when element is in view
      if (distance < window.innerHeight && distance > -element.offsetHeight) {
        const transform = `translateY(${distance * speed}px)`;
        element.style.transform = transform;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);
}

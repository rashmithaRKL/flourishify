
import { useEffect, useRef, useState } from 'react';

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

export function useAnimateOnScroll() {
  const { setElements, entries } = useIntersectionObserver();
  
  useEffect(() => {
    // Apply animations when elements become visible
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-element');
      }
    });
  }, [entries]);

  useEffect(() => {
    // Select all elements with the hidden-element class
    const hiddenElements = document.querySelectorAll('.hidden-element');
    setElements(Array.from(hiddenElements));
  }, [setElements]);

  return null;
}

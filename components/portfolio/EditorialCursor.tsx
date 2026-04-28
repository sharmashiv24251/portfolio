"use client";

import { useEffect, useRef, useState } from "react";

export function EditorialCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reduceMotion) {
      return;
    }

    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;
    let frameId = 0;

    function moveCursor(event: PointerEvent) {
      cursorX = event.clientX;
      cursorY = event.clientY;
      setIsVisible(true);

      const target = event.target as HTMLElement | null;
      setIsInteractive(Boolean(target?.closest("a, button, [tabindex], input, textarea, select")));
    }

    function hideCursor() {
      setIsVisible(false);
    }

    function animate() {
      dotX += (cursorX - dotX) * 0.22;
      dotY += (cursorY - dotY) * 0.22;

      cursorRef.current?.style.setProperty("--cursor-x", `${dotX}px`);
      cursorRef.current?.style.setProperty("--cursor-y", `${dotY}px`);
      dotRef.current?.style.setProperty("--cursor-x", `${cursorX}px`);
      dotRef.current?.style.setProperty("--cursor-y", `${cursorY}px`);

      frameId = requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", moveCursor);
    window.addEventListener("pointerleave", hideCursor);
    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerleave", hideCursor);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className={`editorial-cursor-ring ${isVisible ? "opacity-100" : "opacity-0"} ${
          isInteractive ? "scale-150" : "scale-100"
        }`}
        ref={cursorRef}
      />
      <div
        aria-hidden="true"
        className={`editorial-cursor-dot ${isVisible ? "opacity-100" : "opacity-0"} ${
          isInteractive ? "scale-0" : "scale-100"
        }`}
        ref={dotRef}
      />
    </>
  );
}

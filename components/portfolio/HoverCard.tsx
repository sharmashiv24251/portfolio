"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

type HoverCardProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  align?: "center" | "left";
};

type HoverCardPosition = {
  left: number;
  top: number;
  width: number;
};

export function HoverCard({ children, content, align = "center" }: HoverCardProps) {
  const triggerRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLSpanElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [position, setPosition] = useState<HoverCardPosition>({
    left: 16,
    top: 96,
    width: 352,
  });

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;

    if (!trigger) {
      return;
    }

    const rect = trigger.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const margin = 16;
    const gap = 14;
    const preferredWidth = viewportWidth >= 1536 ? 448 : 384;
    const width = Math.min(preferredWidth, viewportWidth - margin * 2);
    const cardHeight = cardRef.current?.offsetHeight ?? 260;
    const preferredLeft =
      align === "left" ? rect.left : rect.left + rect.width / 2 - width / 2;
    const left = Math.min(
      Math.max(preferredLeft, margin),
      viewportWidth - width - margin,
    );
    const belowTop = rect.bottom + gap;
    const aboveTop = rect.top - cardHeight - gap;
    const top =
      belowTop + cardHeight <= viewportHeight - margin
        ? belowTop
        : Math.max(margin, aboveTop);

    setPosition({ left, top, width });
  }, [align]);

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen, updatePosition]);

  function openCard() {
    setIsOpen(true);
    requestAnimationFrame(updatePosition);
  }

  function closeCard() {
    if (!isPinned) {
      setIsOpen(false);
    }
  }

  function togglePinned() {
    const nextPinned = !isPinned;
    setIsPinned(nextPinned);
    setIsOpen(nextPinned || !isOpen);
    requestAnimationFrame(updatePosition);
  }

  return (
    <span
      className="relative inline-block"
      onBlur={closeCard}
      onFocus={openCard}
      onMouseEnter={openCard}
      onMouseLeave={closeCard}
    >
      <span
        className="cursor-help outline-none"
        onClick={togglePinned}
        ref={triggerRef}
        tabIndex={0}
      >
        {children}
      </span>

      <span
        className={`fixed z-50 border border-stone-950 bg-white p-4 text-left shadow-xl shadow-stone-950/10 transition-[opacity,transform,background-color,border-color,color,box-shadow] duration-300 ease-out dark:border-[#333333] dark:bg-[#242424] dark:shadow-black/30 2xl:p-5 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
        ref={cardRef}
        style={{
          left: `${position.left}px`,
          top: `${position.top}px`,
          width: `${position.width}px`,
        }}
      >
        {content}
      </span>
    </span>
  );
}

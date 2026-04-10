"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { SiGithub } from "react-icons/si";
import { cardsData as cards } from "@/lib/project-data";

function ProjectMedia({
  card,
  className,
}: {
  card: (typeof cards)[number];
  className: string;
}) {
  if (card.videoSrc) {
    return (
      <video
        src={card.videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={className}
      />
    );
  }

  return (
    <Image
      width={300}
      height={300}
      src={card.src}
      alt={card.title}
      className={className}
    />
  );
}

export default function MyProjects() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 bg-black/55 backdrop-blur-md"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] grid place-items-center p-3 md:p-6">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 backdrop-blur md:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[560px] flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]/95 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:h-auto md:max-h-[90vh]"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="relative overflow-hidden border-b border-white/10 bg-black"
              >
                <ProjectMedia
                  card={active}
                  className="h-72 w-full object-cover object-top md:h-[22rem]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/70 backdrop-blur">
                    Featured Project
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-1 flex-col overflow-hidden">
                <div className="border-b border-white/10 px-5 py-5 md:px-6">
                  <div className="flex items-start justify-between gap-4 max-sm:flex-col">
                    <div className="space-y-2">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="text-2xl font-semibold tracking-tight text-white"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="max-w-xl text-sm leading-relaxed text-white/68 md:text-base"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <div className="flex w-full flex-wrap gap-3 sm:w-auto sm:justify-end">
                      {active.visitUrl ? (
                        <motion.a
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          href={active.visitUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/12"
                        >
                          {active.visitLabel ?? "Visit"}
                        </motion.a>
                      ) : null}
                      {active.githubUrl ? (
                        <motion.a
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          href={active.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
                        >
                          <SiGithub className="h-4 w-4" />
                          GitHub
                        </motion.a>
                      ) : active.secondaryUrl ? (
                        <motion.a
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          href={active.secondaryUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
                        >
                          {active.secondaryLabel ?? "Open"}
                        </motion.a>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-6 pt-5 md:px-6">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="max-h-[34vh] overflow-auto rounded-[28px] border border-white/10 bg-white/[0.03] px-4 pb-10 pt-4 text-sm text-white/72 md:max-h-[38vh] md:px-5 md:pb-12 md:pt-5 md:text-[15px] [&_h3]:mb-3 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:uppercase [&_h3]:tracking-[0.2em] [&_h3]:text-white/45 [&_li]:text-white/82 [&_li]:marker:text-emerald-300 [&_p]:leading-7 [&_section]:space-y-5 [&_strong]:font-semibold [&_strong]:text-white"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full mt-4 grid max-sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-50 bg-neutral-900 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <ProjectMedia
                  card={card}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-start flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

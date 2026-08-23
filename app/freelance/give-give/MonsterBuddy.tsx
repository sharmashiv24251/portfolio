"use client";

import Image from "next/image";
import type { CSSProperties, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import ggMascot from "./assets/gg.png";
import styles from "./page.module.css";

const monsterLines = [
  "Hii!!!",
  "visit shivansh.pro",
  "need a frontend dev?",
  "psst, I scan toys",
  "swap ideas?",
] as const;

const soundUrl = "/freelance/give-give/sound/give-give-theme";
const clickUrl = "/freelance/give-give/sound/click";

export function MonsterBuddy() {
  const themeAudioRef = useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [promptVisible, setPromptVisible] = useState(true);

  useEffect(() => {
    const themeAudio = new Audio(soundUrl);
    themeAudio.loop = true;
    themeAudio.volume = 0.32;
    themeAudio.preload = "auto";

    const clickAudio = new Audio(clickUrl);
    clickAudio.volume = 0.38;
    clickAudio.preload = "auto";

    themeAudioRef.current = themeAudio;
    clickAudioRef.current = clickAudio;

    return () => {
      themeAudio.pause();
      clickAudio.pause();
    };
  }, []);

  useEffect(() => {
    if (!soundEnabled) {
      return undefined;
    }

    const playClick = () => {
      const clickAudio = clickAudioRef.current;

      if (!clickAudio) {
        return;
      }

      clickAudio.currentTime = 0;
      void clickAudio.play();
    };

    document.addEventListener("click", playClick);

    return () => {
      document.removeEventListener("click", playClick);
    };
  }, [soundEnabled]);

  function playTheme() {
    const themeAudio = themeAudioRef.current;

    if (!themeAudio) {
      return;
    }

    void themeAudio.play();
  }

  function pauseTheme() {
    const themeAudio = themeAudioRef.current;

    if (!themeAudio) {
      return;
    }

    themeAudio.pause();
  }

  function acceptSound() {
    setSoundEnabled(true);
    setPromptVisible(false);
    playTheme();
  }

  function declineSound() {
    setSoundEnabled(false);
    setPromptVisible(false);
    pauseTheme();
  }

  function toggleSound(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    setSoundEnabled((current) => {
      const next = !current;

      if (next) {
        playTheme();
      } else {
        pauseTheme();
      }

      return next;
    });
  }

  return (
    <div
      className={`${styles.monsterBuddy} ${promptVisible ? styles.monsterAsking : ""}`}
      aria-label="Give-Give sound monster"
    >
      {promptVisible && (
        <div className={styles.soundPrompt} role="dialog" aria-label="Play Give-Give sound?">
          <p>Can I play sound?</p>
          <div>
            <button
              aria-label="Play sound"
              className={styles.soundAccept}
              onClick={acceptSound}
              type="button"
            >
              ✓
            </button>
            <button
              aria-label="Do not play sound"
              className={styles.soundDecline}
              onClick={declineSound}
              type="button"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {!promptVisible && (
        <span className={styles.monsterSpeech} aria-hidden="true">
          {monsterLines.map((line, index) => (
            <span key={line} style={{ "--i": index } as CSSProperties}>
              {line}
            </span>
          ))}
          <button className={styles.soundToggle} onClick={toggleSound} type="button">
            {soundEnabled ? "mute sounds" : "play sounds"}
          </button>
        </span>
      )}

      {soundEnabled && (
        <span className={styles.musicNotes} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M9 18.5a3 3 0 1 1-1.4-2.54V5.5l10-2v11a3 3 0 1 1-1.4-2.54V7.15l-7.2 1.44v9.91Z" />
          </svg>
          <svg viewBox="0 0 24 24">
            <path d="M10 19a3 3 0 1 1-2-2.83V4h11v4H10v11Z" />
          </svg>
          <svg viewBox="0 0 24 24">
            <path d="M8.5 20a2.8 2.8 0 1 1-1.3-2.36V6.2l9.6-2.2v10.5a2.8 2.8 0 1 1-1.3-2.36V8.3l-7 1.58V20Z" />
          </svg>
        </span>
      )}

      <span className={styles.monsterFigure} aria-hidden="true">
        <Image
          alt=""
          aria-hidden="true"
          className={styles.monsterImage}
          priority
          sizes="(min-width: 1000px) 220px, 34vw"
          src={ggMascot}
        />
      </span>
    </div>
  );
}

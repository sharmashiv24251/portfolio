import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  Camera,
  Check,
  Database,
  ImageUp,
  PenTool,
  ScanLine,
  Smartphone,
  Sparkles,
  ToyBrick,
} from "lucide-react";
import { MonsterBuddy } from "./MonsterBuddy";
import homeScreen from "./assets/home_screen.png";
import onboardingScreen from "./assets/onboarding.png";
import toyCollectionScreen from "./assets/toy_collection.png";
import toyExchangeScreen from "./assets/toy_exchange.png";
import toyScanScreen from "./assets/toy_scan.png";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Give-Give | Toy Exchange App",
  description:
    "A playful project summary for Give-Give, a toy exchange platform built end to end with React Native, Expo, TypeScript, iOS VisionKit, and Supabase.",
};

const toyActions = [
  { label: "eat toys", icon: "cookie", tone: "slabMandarin" },
  { label: "check it", icon: "box", tone: "slabCherrywood" },
  { label: "swap it", icon: "swap", tone: "slabLavender" },
  { label: "meet up", icon: "compass", tone: "slabApple" },
] as const;

const buildBadges = [
  { label: "React Native", icon: Smartphone },
  { label: "Expo", icon: Sparkles },
  { label: "TypeScript", icon: Check },
  { label: "iOS VisionKit", icon: ScanLine },
  { label: "Supabase", icon: Database },
  { label: "Figma to app", icon: PenTool },
] as const;

const flow = [
  {
    kicker: "01",
    title: "Say hi to the toy beast.",
    text: "Onboarding feels like the app is meeting the player, not making them fill a form. I translated the Figma character, speech bubble rhythm, and punchy welcome screens into a React Native flow.",
    image: onboardingScreen,
    alt: "Give-Give onboarding screen with character and speech bubble",
    color: "mint",
  },
  {
    kicker: "02",
    title: "Pick a toy mission.",
    text: "The home screen is the command center: eat toys, check it, swap it, meet up. Big slab buttons, playful icon circles, and the dark raisin backdrop make each action feel like a toy cartridge.",
    image: homeScreen,
    alt: "Give-Give home screen with four chunky action buttons",
    color: "dark",
  },
  {
    kicker: "03",
    title: "Scan the toy pile.",
    text: "The camera flow uses iOS VisionKit to recognize toys from real photos, then turns the result into a friendly scan moment instead of a cold utility screen.",
    image: toyScanScreen,
    alt: "Give-Give toy scanning recognition screen",
    color: "mandarin",
  },
  {
    kicker: "04",
    title: "Sort the tiny chaos.",
    text: "Collections become manageable with toy counts, category chips, item rows, and status markers. Under the charm, the app still needed clear state, filters, and clean data flow.",
    image: toyCollectionScreen,
    alt: "Give-Give toy collection and sorting screen",
    color: "green",
  },
  {
    kicker: "05",
    title: "Swap, then meet up.",
    text: "The exchange flow turns matched toys into a bright, physical-feeling handoff story. Supabase powers the app data behind the scenes while the UI keeps the trade feeling silly and safe.",
    image: toyExchangeScreen,
    alt: "Give-Give toy exchange result screen",
    color: "lavender",
  },
] satisfies Array<{
  kicker: string;
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
  color: "mint" | "dark" | "mandarin" | "green" | "lavender";
}>;

const toyTicker = [
  "#0023",
  "GAME MAN",
  "VISIONKIT",
  "FIGMA",
  "SUPABASE",
  "EXPO",
  "SWAP READY",
  "TOYS 238",
] as const;

function PixelIcon({ name }: { name: (typeof toyActions)[number]["icon"] }) {
  return (
    <span className={styles.pixelIcon} aria-hidden="true">
      {name === "cookie" && "◔"}
      {name === "box" && "▣"}
      {name === "swap" && "↔"}
      {name === "compass" && "◆"}
    </span>
  );
}

function ToyAction({
  label,
  icon,
  tone,
  index,
}: {
  label: string;
  icon: (typeof toyActions)[number]["icon"];
  tone: (typeof toyActions)[number]["tone"];
  index: number;
}) {
  return (
    <li className={`${styles.toyAction} ${styles[tone]}`} style={{ "--i": index } as CSSProperties}>
      <span>{label}</span>
      <PixelIcon name={icon} />
    </li>
  );
}

function ScreenshotPanel({
  item,
  index,
}: {
  item: (typeof flow)[number];
  index: number;
}) {
  return (
    <section className={`${styles.flowPanel} ${styles[item.color]}`} style={{ "--i": index } as CSSProperties}>
      <div className={styles.flowCopy}>
        <span>{item.kicker}</span>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </div>
      <div className={styles.screenFrame}>
        <Image
          alt={item.alt}
          className={styles.screenImage}
          placeholder="blur"
          priority={index < 2}
          sizes="(min-width: 1000px) 360px, 72vw"
          src={item.image}
        />
      </div>
    </section>
  );
}

export default function GiveGivePage() {
  return (
    <main className={styles.experience}>
      <MonsterBuddy />

      <section className={styles.hero} aria-labelledby="give-give-title">
        <div className={styles.confetti} aria-hidden="true">
          {Array.from({ length: 22 }, (_, index) => (
            <span key={index} style={{ "--i": index } as CSSProperties} />
          ))}
        </div>

        <nav className={styles.topBar} aria-label="Give-Give navigation">
          <Link href="/" className={styles.backLink}>
            <ArrowRight aria-hidden="true" />
            Portfolio
          </Link>
          <span>toy exchange platform</span>
        </nav>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.pixelLogo}>gg</p>
            <h1 id="give-give-title">
              HI THERE, I BUILT THE TOY EXCHANGE THING.
            </h1>
            <p>
              Give-Give is a quirky mobile app where toys get scanned, sorted,
              swapped, and sent off to a new tiny kingdom. I built the entire
              app end to end from the provided Figma file.
            </p>
            <div className={styles.heroButtons}>
              <a href="#story">
                check it
                <ArrowRight aria-hidden="true" />
              </a>
              <a href="#build">tech bits</a>
            </div>
          </div>

          <div className={styles.heroStack} aria-label="Give-Give app actions">
            <ul className={styles.actionList}>
              {toyActions.map((action, index) => (
                <ToyAction {...action} index={index} key={action.label} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className={styles.ticker} aria-label="Give-Give project tags">
        <div>
          {[...toyTicker, ...toyTicker].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className={styles.summary} id="story" aria-labelledby="summary-title">
        <div className={styles.speechBubble}>
          <span>project summary</span>
          <h2 id="summary-title">WHAT IS THIS BEAUTIFUL TOY CHAOS?</h2>
          <p>
            Give-Give is a toy exchange platform for families who want toys to
            keep moving instead of collecting dust. The app helps people capture
            toys with the camera, recognize and organize them, choose what they
            want to swap, and move toward a meetup.
          </p>
        </div>
        <div className={styles.summaryTiles}>
          <article>
            <ToyBrick aria-hidden="true" />
            <strong>scan</strong>
            <p>Turn a photo into recognized toy items.</p>
          </article>
          <article>
            <ImageUp aria-hidden="true" />
            <strong>sort</strong>
            <p>Group the little treasures into usable collections.</p>
          </article>
          <article>
            <Camera aria-hidden="true" />
            <strong>swap</strong>
            <p>Prepare a trade flow that feels playful, not transactional.</p>
          </article>
        </div>
      </section>

      <div className={styles.flowStack}>
        {flow.map((item, index) => (
          <ScreenshotPanel index={index} item={item} key={item.title} />
        ))}
      </div>

      <section className={styles.build} id="build" aria-labelledby="build-title">
        <div className={styles.buildCopy}>
          <span>built end to end</span>
          <h2 id="build-title">FROM FIGMA FILE TO REAL APP, NO TOY LEFT BEHIND.</h2>
          <p>
            I owned the full implementation: React Native screens, Expo setup,
            TypeScript structure, VisionKit-powered scanning moments, Supabase
            integration, and the tiny UX details that make this app feel alive.
          </p>
        </div>
        <ul className={styles.badgeWall}>
          {buildBadges.map(({ label, icon: Icon }) => (
            <li key={label}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.donePanel} aria-label="Give-Give outcome">
        <div>
          <span>DOOONE!</span>
          <h2>NOW IT&apos;S TIME TO EXCHANGE</h2>
          <p>
            The final app keeps the Figma personality intact while turning it
            into a working mobile product: bright, odd, useful, and absolutely
            committed to the toy bit.
          </p>
        </div>
        <Image
          alt="Give-Give toy exchange completion screen"
          className={styles.finalScreen}
          placeholder="blur"
          sizes="(min-width: 1000px) 340px, 70vw"
          src={toyExchangeScreen}
        />
      </section>
    </main>
  );
}

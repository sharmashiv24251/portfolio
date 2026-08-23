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
import toySelectScreen from "./assets/toy_select.png";
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
    title: "Meet up, then swap.",
    text: "The exchange flow turns matched toys into a bright, physical-feeling handoff story. Supabase powers the app data behind the scenes while the UI keeps the trade feeling silly and safe.",
    image: toySelectScreen,
    alt: "Give-Give toy selection screen with swipeable match cards",
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

const pixelIcons: Record<(typeof toyActions)[number]["icon"], React.ReactNode> = {
  cookie: (
    <svg fill="none" viewBox="0 0 77 77" xmlns="http://www.w3.org/2000/svg">
      <mask
        height="78"
        id="gg-eat-toys-mask"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" } as React.CSSProperties}
        width="77"
        x="0"
        y="-1"
      >
        <rect fill="#D9D9D9" height="64" transform="rotate(-13 0 14.3969)" width="64" y="14.3969" />
      </mask>
      <g mask="url(#gg-eat-toys-mask)">
        <path
          d="M44.5412 65.0584C40.8611 65.908 37.2395 66.0063 33.6764 65.3533C30.1133 64.7003 26.8459 63.4456 23.8744 61.5891C20.9032 59.7322 18.3423 57.3419 16.1917 54.4183C14.0412 51.4946 12.543 48.2012 11.6973 44.538C10.8301 40.7817 10.7343 37.1137 11.4099 33.534C12.0854 29.9538 13.3613 26.6793 15.2375 23.7105C17.1132 20.7414 19.5056 18.1971 22.4145 16.0778C25.3237 13.9579 28.569 12.4845 32.1504 11.6577C33.1122 11.4357 34.0884 11.2612 35.079 11.1342C36.0696 11.0072 37.0715 10.9428 38.0846 10.9411C38.1922 12.9027 38.6823 14.6702 39.5551 16.2436C40.4277 17.8165 41.5742 19.0762 42.9947 20.0227C44.4146 20.9688 46.0599 21.5291 47.9306 21.7034C49.8009 21.8778 51.7768 21.5368 53.8584 20.6804C54.0633 23.5318 55.0334 25.8519 56.7687 27.6408C58.5042 29.43 60.9996 30.0018 64.2551 29.356C64.4202 29.836 64.5687 30.3172 64.7006 30.7994C64.8325 31.2817 64.9516 31.7532 65.0579 32.214C65.9005 35.8633 66.0101 39.459 65.387 43.0011C64.7634 46.5433 63.5364 49.8053 61.706 52.7873C59.8753 55.7693 57.497 58.343 54.5713 60.5081C51.6456 62.6733 48.3022 64.1901 44.5412 65.0584ZM33.3061 34.1666C34.4143 33.9108 35.2649 33.3059 35.858 32.3521C36.451 31.3982 36.6196 30.3672 36.3638 29.259C36.108 28.1508 35.5031 27.3002 34.5492 26.7071C33.5954 26.1141 32.5644 25.9455 31.4562 26.2013C30.348 26.4571 29.4974 27.062 28.9043 28.0159C28.3112 28.9697 28.1426 30.0007 28.3984 31.1089C28.6543 32.2171 29.2591 33.0677 30.213 33.6608C31.1669 34.2539 32.1979 34.4225 33.3061 34.1666ZM31.1088 48.358C32.217 48.1021 33.0676 47.4973 33.6607 46.5434C34.2537 45.5896 34.4224 44.5586 34.1665 43.4504C33.9107 42.3422 33.3058 41.4916 32.3519 40.8985C31.3981 40.3054 30.3671 40.1368 29.2589 40.3926C28.1507 40.6485 27.3001 41.2533 26.707 42.2072C26.1139 43.1611 25.9453 44.1921 26.2012 45.3003C26.457 46.4084 27.0619 47.2591 28.0157 47.8521C28.9696 48.4452 30.0006 48.6138 31.1088 48.358ZM48.5726 46.972C49.3088 46.802 49.8684 46.4105 50.2514 45.7975C50.6345 45.1846 50.741 44.51 50.571 43.7738C50.4011 43.0376 50.0096 42.478 49.3966 42.0949C48.7836 41.7119 48.109 41.6054 47.3728 41.7753C46.6367 41.9453 46.077 42.3368 45.694 42.9497C45.311 43.5627 45.2044 44.2373 45.3744 44.9735C45.5444 45.7097 45.9358 46.2693 46.5488 46.6524C47.1618 47.0354 47.8364 47.1419 48.5726 46.972ZM43.2231 59.3314C48.8355 58.0357 53.1582 55.0937 56.1914 50.5053C59.2248 45.9165 60.38 40.7933 59.6568 35.1359C57.2817 34.7327 55.2275 33.8568 53.4944 32.5081C51.7613 31.1594 50.464 29.4948 49.6026 27.5142C46.1392 27.7692 42.9094 26.9574 39.9131 25.0788C36.9168 23.2002 34.7841 20.6534 33.515 17.4382C30.5806 18.1057 27.969 19.2938 25.68 21.0027C23.3908 22.7122 21.5271 24.7366 20.089 27.0761C18.6505 29.4161 17.6826 31.9807 17.1852 34.7698C16.688 37.5594 16.7674 40.3748 17.4233 43.2161C18.7704 49.0506 21.9472 53.5322 26.954 56.6607C31.9608 59.7893 37.3838 60.6795 43.2231 59.3314Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  box: (
    <svg fill="none" viewBox="0 0 48 52" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.17838 51.4029L-4.94029e-05 15.0737L13.5626 1.30722L17.9395 5.44148L9.17293 14.239L35.074 11.973L24.9129 4.83139L28.5055 -0.000112768L44.3213 11.1955L47.4997 47.5253L3.17838 51.4029ZM18.068 29.989L29.137 29.0206C29.8494 28.9583 30.4179 28.6734 30.8424 28.1661C31.2665 27.6587 31.4472 27.048 31.3848 26.3338C31.3222 25.6192 31.0383 25.0513 30.533 24.6302C30.0273 24.2096 29.4183 24.0304 28.7059 24.0928L17.6369 25.0612C16.9245 25.1235 16.3562 25.4083 15.9322 25.9157C15.5077 26.423 15.3267 27.034 15.3892 27.7486C15.4517 28.4632 15.7358 29.0309 16.2415 29.4515C16.7468 29.8722 17.3556 30.0513 18.068 29.989ZM8.5205 45.0364L41.1087 42.1853L38.954 17.558L6.36586 20.4091L8.5205 45.0364Z"
        fill="currentColor"
      />
    </svg>
  ),
  swap: (
    <svg fill="none" viewBox="0 0 67 67" xmlns="http://www.w3.org/2000/svg">
      <mask
        height="67"
        id="gg-swap-mask"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" } as React.CSSProperties}
        width="67"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="64" transform="rotate(-2.5 0 2.79164)" width="64" y="2.79164" />
      </mask>
      <g mask="url(#gg-swap-mask)">
        <path
          d="M20.673 56.3287L6.03451 42.9272L19.4493 28.3008L23.7419 32.2559L17.1257 39.5021L35.8971 38.6825L36.1545 44.5782L17.3831 45.3978L24.6046 52.0145L20.673 56.3287ZM47.2804 38.4031L42.9879 34.4485L49.6298 27.2259L30.8583 28.0455L30.6009 22.1498L49.3724 21.3302L42.1251 14.6894L46.0567 10.3758L60.7199 23.7756L47.2804 38.4031Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  compass: (
    <svg fill="none" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.106 39.3613L34.4162 34.4862L39.2931 16.1764L20.9829 21.0515L16.106 39.3613ZM27.7024 30.2299C27.0256 30.2298 26.4458 29.9818 25.9631 29.4858C25.4801 28.9902 25.2385 28.404 25.2386 27.7271C25.2386 27.0502 25.4866 26.4704 25.9826 25.9878C26.4782 25.5047 27.0645 25.2632 27.7413 25.2632C28.4182 25.2632 28.998 25.5113 29.4806 26.0073C29.9637 26.5029 30.2053 27.0891 30.2052 27.766C30.2052 28.4429 29.9572 29.0226 29.4611 29.5053C28.9656 29.9884 28.3793 30.2299 27.7024 30.2299ZM27.7359 55.4685C23.8852 55.4684 20.2784 54.744 16.9153 53.2953C13.5527 51.8472 10.6168 49.8684 8.10762 47.3589C5.59841 44.8495 3.61988 41.9134 2.17204 38.5506C0.72376 35.1879 -0.000289706 31.5799 -0.000105416 27.7265C7.8873e-05 23.8732 0.724474 20.2641 2.17308 16.8993C3.62124 13.534 5.59871 10.6039 8.1055 8.10892C10.6123 5.61349 13.5477 3.63807 16.9118 2.18268C20.2759 0.727283 23.8852 -0.000322567 27.7399 -0.000138214C31.5946 4.61393e-05 35.2054 0.727332 38.5725 2.18172C41.9395 3.6361 44.8698 5.61002 47.3635 8.10347C49.8576 10.5969 51.8321 13.5288 53.2871 16.8991C54.7416 20.2694 55.4688 23.8816 55.4686 27.7359C55.4684 31.5892 54.7404 35.1969 53.2847 38.5591C51.829 41.9217 49.8533 44.8538 47.3576 47.3555C44.8624 49.8571 41.931 51.8348 38.5633 53.2884C35.1957 54.742 31.5866 55.4687 27.7359 55.4685ZM27.7382 49.5919C33.8457 49.5922 39.0107 47.4755 43.2332 43.2419C47.4556 39.0088 49.5669 33.8382 49.5672 27.7302C49.5675 21.6227 47.4582 16.4577 43.2393 12.2353C39.02 8.01285 33.8565 5.90149 27.7489 5.9012C21.6414 5.90091 16.4691 8.01021 12.232 12.2291C7.99532 16.4485 5.87685 21.6119 5.87656 27.7195C5.87627 33.827 7.99291 38.9994 12.2265 43.2365C16.4596 47.4731 21.6302 49.5916 27.7382 49.5919Z"
        fill="currentColor"
      />
    </svg>
  ),
};

const pixelIconScale: Record<(typeof toyActions)[number]["icon"], number> = {
  cookie: 2,
  box: 1,
  swap: 1.3,
  compass: 1.15,
};

function PixelIcon({ name }: { name: (typeof toyActions)[number]["icon"] }) {
  return (
    <span
      aria-hidden="true"
      className={styles.pixelIcon}
      style={{ "--icon-scale": pixelIconScale[name] } as CSSProperties}
    >
      {pixelIcons[name]}
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

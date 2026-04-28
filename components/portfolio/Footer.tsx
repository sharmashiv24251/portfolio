import { footerLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="no-print flex w-full flex-col gap-5 border-t border-stone-950 px-5 py-8 dark:border-[#333333] sm:px-8 md:px-12 lg:flex-row lg:items-center lg:justify-between 2xl:px-24 2xl:py-10">
      <p className="font-serif text-xs italic text-stone-600 dark:text-[#a0a0a0] 2xl:text-sm">
        Last updated April 2026
      </p>

      <div className="flex flex-wrap gap-3">
        {footerLinks.map((link) => (
          <a
            aria-label={link.label}
            className="inline-flex size-9 items-center justify-center border border-stone-950 text-stone-950 transition-colors hover:bg-stone-200 dark:border-[#333333] dark:text-white dark:hover:bg-[#242424] 2xl:size-10"
            href={link.href}
            key={link.label}
            rel="noreferrer"
            target="_blank"
          >
            <FooterBrandIcon label={link.label} />
          </a>
        ))}
      </div>
    </footer>
  );
}

function FooterBrandIcon({ label }: { label: string }) {
  if (label === "GitHub") {
    return (
      <svg aria-hidden="true" className="size-4 2xl:size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.05A9.33 9.33 0 0 1 12 6.88c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.91v2.82c0 .28.18.6.69.5A10.04 10.04 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg aria-hidden="true" className="size-4 2xl:size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.94 8.98H3.75v10.27h3.19V8.98ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm13.9 9.63c0-3.1-1.65-4.54-3.86-4.54a3.33 3.33 0 0 0-3.01 1.66h-.04V8.98H9.28v10.27h3.19v-5.08c0-1.34.25-2.64 1.92-2.64 1.64 0 1.66 1.54 1.66 2.72v5h3.2v-5.62Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-4 2xl:size-5" fill="none" viewBox="0 0 24 24">
      <rect height="16" rx="4.5" stroke="currentColor" strokeWidth="2" width="16" x="4" y="4" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.75" cy="7.25" fill="currentColor" r="1.15" />
    </svg>
  );
}

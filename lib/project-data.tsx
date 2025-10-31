export const cardsData: {
  description: string;
  title: string;
  src: string;
  visitUrl?: string;
  githubUrl?: string;
  content: any;
}[] = [
  {
    description: "Canvas-based layout builder like Canva",
    title: "ImageLayoutBuilder",
    src: "https://opfjwckyarxymdkzuwdk.supabase.co/storage/v1/object/public/temp-blue-bnb/canvas-project.png",
    visitUrl: "https://canvas-app-konva.vercel.app/",
    githubUrl: "https://github.com/sharmashiv24251/canvas-app-konva",
    content: () => {
      return (
        <section className="rounded-lg max-w-lg mx-auto">
          <p className="mb-6">
            A powerful canvas-based design tool built with Next.js and Konva.js.
            Lets users create visual layouts using images, shapes, arrows, and text —
            all editable with transform controls and real-time inspector updates.
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <ul className="list-disc list-inside">
              <li><strong>Next.js</strong></li>
              <li><strong>Redux Toolkit</strong></li>
              <li><strong>Konva.js</strong></li>
              <li><strong>Tailwind CSS</strong></li>
              <li><strong>Local Storage (JSON)</strong></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Key Features</h3>
            <ul className="list-disc list-inside">
              <li>Infinite canvas with smooth rendering</li>
              <li>Elements sidebar with reordering and layer control</li>
              <li>Inspector panel with real-time property editing</li>
              <li>Keyboard shortcuts (Undo, Redo, Copy, Paste, Delete)</li>
              <li>Persistent designs via local storage</li>
            </ul>
          </div>
        </section>
      );
    },
  },
  {
    description: "Crypto portfolio tracker with live data",
    title: "Token Portfolio",
    src: "https://opfjwckyarxymdkzuwdk.supabase.co/storage/v1/object/public/temp-blue-bnb/token.png",
    visitUrl: "https://crypto-dashboard-taupe-theta.vercel.app/",
    githubUrl: "https://github.com/sharmashiv24251/crypto-dashboard",
    content: () => {
      return (
        <section className="rounded-lg max-w-lg mx-auto">
          <p className="mb-6">
            Track your cryptocurrency holdings with live prices, a donut chart
            breakdown, and wallet integration. Built with React + Vite and powered
            by the CoinGecko API.
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <ul className="list-disc list-inside">
              <li><strong>React + Vite</strong></li>
              <li><strong>Redux Toolkit</strong></li>
              <li><strong>Tailwind CSS</strong></li>
              <li><strong>TanStack Query (React Query)</strong></li>
              <li><strong>Wagmi + RainbowKit</strong></li>
              <li><strong>CoinGecko API</strong></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Key Features</h3>
            <ul className="list-disc list-inside">
              <li>Wallet connection and persistent local data</li>
              <li>Live token prices with 24h % change indicators</li>
              <li>Donut chart for portfolio breakdown</li>
              <li>Searchable watchlist with infinite scroll</li>
              <li>Responsive Figma-accurate UI</li>
            </ul>
          </div>
        </section>
      );
    },
  },

  // --- EXISTING PROJECTS BELOW ---
  {
    description: "airbnb clone ",
    title: "Blue-BnB",
    src: "https://opfjwckyarxymdkzuwdk.supabase.co/storage/v1/object/public/temp-blue-bnb/bnb.png",
    githubUrl: "https://github.com/sharmashiv24251/blue-bnb",
    visitUrl: "https://blue-bnb.vercel.app/",
    content: () => {
      return (
        <section className="rounded-lg max-w-lg mx-auto">
          <p className="mb-6">
            This project replicates core Airbnb functionalities in a streamlined
            platform, built using modern web technologies for a seamless user
            experience.
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <ul className="list-disc list-inside">
              <li><strong>Supabase</strong></li>
              <li><strong>Prisma</strong></li>
              <li><strong>Next.js</strong></li>
              <li><strong>TypeScript</strong></li>
              <li><strong>ShadCN UI</strong></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Key Features</h3>
            <ul className="list-disc list-inside">
              <li>List and manage property listings</li>
              <li>Explore and view available properties</li>
              <li>Favorite listings for quick access</li>
              <li>Leave and read reviews on properties</li>
            </ul>
          </div>
        </section>
      );
    },
  },
  {
    description: "free certificates",
    title: "Certificate app",
    src: "https://opfjwckyarxymdkzuwdk.supabase.co/storage/v1/object/public/temp-blue-bnb/certificate.png",
    visitUrl: "https://build-it-sigma.vercel.app/",
    githubUrl: "https://github.com/sharmashiv24251/build-it",
    content: () => {
      return (
        <section className="rounded-lg max-w-lg mx-auto">
          <p className="mb-6">
            Gives Free Internship certificates along with a scannable QR code
            which verifies the authenticity of the user.
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <ul className="list-disc list-inside">
              <li><strong>Supabase</strong></li>
              <li><strong>Prisma</strong></li>
              <li><strong>Next.js</strong></li>
              <li><strong>TypeScript</strong></li>
              <li><strong>ShadCN UI</strong></li>
            </ul>
          </div>
        </section>
      );
    },
  },
  {
    description: "Filterable Charts from Api",
    title: "Chart App",
    src: "https://opfjwckyarxymdkzuwdk.supabase.co/storage/v1/object/public/temp-blue-bnb/chart.png?t=2024-11-09T19%3A27%3A47.459Z",
    visitUrl: "https://rock8-chart.vercel.app/",
    githubUrl: "https://github.com/sharmashiv24251/rock8_chart",
    content: () => {
      return (
        <section className="rounded-lg max-w-lg mx-auto">
          <p className="mb-6">Show Chart From API</p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <ul className="list-disc list-inside">
              <li><strong>Next.js</strong></li>
              <li><strong>Zustand</strong></li>
              <li><strong>TypeScript</strong></li>
              <li><strong>ShadCN UI</strong></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Key Features</h3>
            <ul className="list-disc list-inside">
              <li>User can filter charts by date, gender</li>
              <li>Filters are saved in URL and persisted in local storage</li>
            </ul>
          </div>
        </section>
      );
    },
  },
  {
    description: "fetch emails from api",
    title: "Outlook clone",
    src: "https://opfjwckyarxymdkzuwdk.supabase.co/storage/v1/object/public/temp-blue-bnb/outlook.png",
    githubUrl: "https://github.com/sharmashiv24251/Outlook_rock8",
    visitUrl: "https://outlook-rock8.vercel.app/",
    content: () => {
      return (
        <section className="rounded-lg max-w-lg mx-auto">
          <p className="mb-6">
            Fetches email from API, opens master-slave layout on click, and fetches body from another endpoint.
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <ul className="list-disc list-inside">
              <li><strong>Next.js</strong></li>
              <li><strong>React Query</strong></li>
              <li><strong>Zustand</strong></li>
              <li><strong>TypeScript</strong></li>
              <li><strong>ShadCN UI</strong></li>
            </ul>
          </div>
        </section>
      );
    },
  },
  {
    description: "Html css and js only",
    title: "Old Portfolio",
    visitUrl: "https://silver-tanuki-98f89f.netlify.app/",
    githubUrl: "https://github.com/sharmashiv24251",
    src: "https://opfjwckyarxymdkzuwdk.supabase.co/storage/v1/object/public/temp-blue-bnb/portfolio.png?t=2024-11-09T19%3A30%3A32.048Z",
    content: () => {
      return (
        <section className="rounded-lg max-w-lg">
          <p className="mb-6">Old portfolio made with HTML, CSS, and JS</p>
          <div>
            <h3 className="text-lg font-semibold">Key Features</h3>
            <ul className="list-disc list-inside">
              <li><strong>Fully working iPhone clone</strong></li>
            </ul>
          </div>
        </section>
      );
    },
  },
];

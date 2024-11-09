export const cardsData: {
  description: string;
  title: string;
  src: string;
  visitUrl?: string;
  githubUrl?: string;
  content: any;
}[] = [
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
              <li>
                <strong>Supabase</strong>
              </li>
              <li>
                <strong>Prisma</strong>
              </li>
              <li>
                <strong>Next.js</strong>
              </li>
              <li>
                <strong>TypeScript</strong>
              </li>
              <li>
                <strong>ShadCN UI</strong>
              </li>
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
              <li>
                <strong>Supabase</strong>
              </li>
              <li>
                <strong>Prisma</strong>
              </li>
              <li>
                <strong>Next.js</strong>
              </li>
              <li>
                <strong>TypeScript</strong>
              </li>
              <li>
                <strong>ShadCN UI</strong>
              </li>
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
          <p className="mb-6">Show Chart From api</p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <ul className="list-disc list-inside">
              <li>
                <strong>Next.js</strong>
              </li>
              <li>
                <strong>Zustand</strong>
              </li>
              <li>
                <strong>TypeScript</strong>
              </li>
              <li>
                <strong>ShadCN UI</strong>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Key Features</h3>
            <ul className="list-disc list-inside">
              <li>User can filter charts by date , gender</li>
              <li>filters are saved in url and persisted in local storage</li>
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
            Fetches email from api , on clicking an email opens master slave
            layout, fetches its body from different api
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <ul className="list-disc list-inside">
              <li>
                <strong>Next.js</strong>
              </li>
              <li>
                <strong>React Query</strong>
              </li>
              <li>
                <strong>Zustand</strong>
              </li>
              <li>
                <strong>TypeScript</strong>
              </li>
              <li>
                <strong>ShadCN UI</strong>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Key Features</h3>
            <ul className="list-disc list-inside">
              <li>User can filter charts by date , gender</li>
              <li>filters are saved in url and persisted in local storage</li>
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
        <section className="rounded-lg max-w-lg mx-auto">
          <p className="mb-6">Old portfolio made with html , css , js</p>

          <div>
            <h3 className="text-lg font-semibold">Key Features</h3>
            <ul className="list-disc list-inside">
              <li>
                <strong>fuly working iPhone clone</strong>
              </li>
            </ul>
          </div>
        </section>
      );
    },
  },
];

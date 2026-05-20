export type RichTextContent = readonly (string | { code: string })[];

export type BlogBlock =
  | {
      kind: "paragraph";
      content: RichTextContent;
    }
  | {
      kind: "heading";
      text: string;
    }
  | {
      kind: "code";
      language: "ts";
      code: string;
      caption?: string;
    }
  | {
      kind: "list";
      items: readonly RichTextContent[];
    }
  | {
      kind: "callout";
      content: RichTextContent;
    };

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  period: string;
  readingTime: string;
  author: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  videoUrl: string;
  videoEmbedUrl: string;
  tags: readonly string[];
  blocks: readonly BlogBlock[];
};

export const blogPosts = [
  {
    slug: "typescript-never-exhaustive-checks",
    title: "Using TypeScript's never Type for Exhaustive Checks",
    summary:
      "A small TypeScript pattern that turns missing union branches into compile-time errors before they become quiet UI bugs.",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    period: "May 20, 2026",
    readingTime: "5 min read",
    author: "Shivansh Sharma",
    thumbnailUrl: "https://i.ytimg.com/vi/kkFBmkUiG6g/maxresdefault.jpg",
    thumbnailAlt: "TypeScript never type video thumbnail",
    videoUrl: "https://youtu.be/kkFBmkUiG6g",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/kkFBmkUiG6g",
    tags: ["TypeScript", "Frontend", "Type Safety"],
    blocks: [
      {
        kind: "paragraph",
        content: [
          "One TypeScript pattern I use a lot is exhaustive checking with ",
          { code: "never" },
          ". It is small, but it changes how state bugs show up. Instead of finding a missing branch during QA, you get a compiler error the moment the state model changes.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          "Most UI state bugs are not about the states you already know. They come from the new state someone adds later, after the original rendering code felt finished.",
        ],
      },
      {
        kind: "heading",
        text: "Start With A Closed Union",
      },
      {
        kind: "paragraph",
        content: ["Imagine you have an API state like this:"],
      },
      {
        kind: "code",
        language: "ts",
        code: `type ApiState =
  | { status: "loading" }
  | { status: "success"; data: string[] }
  | { status: "error"; message: string };`,
      },
      {
        kind: "paragraph",
        content: [
          "A render function might handle those three states and then leave a generic fallback at the end:",
        ],
      },
      {
        kind: "code",
        language: "ts",
        code: `function render(state: ApiState): string {
  if (state.status === "loading") {
    return "Loading...";
  }

  if (state.status === "success") {
    return state.data.join(", ");
  }

  if (state.status === "error") {
    return state.message;
  }

  return "Unknown state";
}`,
        caption: "This compiles, but the fallback hides future missing cases.",
      },
      {
        kind: "paragraph",
        content: [
          "Now another engineer adds a new state somewhere else in the app:",
        ],
      },
      {
        kind: "code",
        language: "ts",
        code: `type ApiState =
  | { status: "loading" }
  | { status: "success"; data: string[] }
  | { status: "error"; message: string }
  | { status: "idle" };`,
      },
      {
        kind: "paragraph",
        content: [
          "The render function still compiles. That is the problem. The app can move into ",
          { code: "idle" },
          ", but this part of the UI never got updated to handle it.",
        ],
      },
      {
        kind: "heading",
        text: "Make The Fallback Impossible",
      },
      {
        kind: "paragraph",
        content: [
          "Instead of returning a generic fallback, tell TypeScript that reaching the final branch should be impossible:",
        ],
      },
      {
        kind: "code",
        language: "ts",
        code: `function render(state: ApiState): string {
  if (state.status === "loading") {
    return "Loading...";
  }

  if (state.status === "success") {
    return state.data.join(", ");
  }

  if (state.status === "error") {
    return state.message;
  }

  const impossible: never = state;
  return impossible;
}`,
      },
      {
        kind: "paragraph",
        content: [
          "After TypeScript narrows ",
          { code: "loading" },
          ", ",
          { code: "success" },
          ", and ",
          { code: "error" },
          ", there should be no possible value left. That is what ",
          { code: "never" },
          " represents.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          "The moment ",
          { code: "idle" },
          " is added, the final branch is no longer impossible. TypeScript catches it:",
        ],
      },
      {
        kind: "code",
        language: "ts",
        code: `Type '{ status: "idle" }' is not assignable to type 'never'.`,
      },
      {
        kind: "callout",
        content: [
          "That error is exactly what you want. It says a new API state exists and this renderer has not dealt with it yet.",
        ],
      },
      {
        kind: "heading",
        text: "The Same Idea Works In Switch Statements",
      },
      {
        kind: "paragraph",
        content: [
          "I like using the same pattern in reducers and action handlers, where missed cases can be hard to spot during review.",
        ],
      },
      {
        kind: "code",
        language: "ts",
        code: `type Action =
  | { type: "open" }
  | { type: "close" }
  | { type: "reset" };

function reducer(isOpen: boolean, action: Action) {
  switch (action.type) {
    case "open":
      return true;
    case "close":
      return false;
    case "reset":
      return false;
    default: {
      const exhaustive: never = action;
      return exhaustive;
    }
  }
}`,
      },
      {
        kind: "paragraph",
        content: [
          "If someone adds ",
          { code: '{ type: "toggle" }' },
          " later, the reducer fails at compile time until the new action is handled.",
        ],
      },
      {
        kind: "heading",
        text: "Where It Helps Most",
      },
      {
        kind: "list",
        items: [
          ["Reducers with many action types"],
          ["API states that drive different UI branches"],
          ["Switch statements over discriminated unions"],
          ["Shared types in large teams"],
          ["Refactors where a type changes in one place and rendering code lives somewhere else"],
        ],
      },
      {
        kind: "paragraph",
        content: [
          "The pattern is not fancy. That is why I like it. It takes a branch that used to hide missing work and turns it into a useful compiler check.",
        ],
      },
      {
        kind: "paragraph",
        content: [
          "Tiny feature, real payoff. This is the kind of thing that makes TypeScript feel powerful in day-to-day frontend work.",
        ],
      },
    ],
  },
] satisfies readonly BlogPost[];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

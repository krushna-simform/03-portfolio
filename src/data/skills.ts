import { Skills } from "@/types/types";

const SKILLS: Array<Skills> = [
  {
    id: crypto.randomUUID(),
    name: "html",
    path: "/icon/html.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: crypto.randomUUID(),
    name: "css",
    path: "/icon/css.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: crypto.randomUUID(),
    name: "javascript",
    path: "/icon/javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: crypto.randomUUID(),
    name: "typescript",
    path: "/icon/typescript.svg",
    url: "https://www.typescriptlang.org/",
  },
  {
    id: crypto.randomUUID(),
    name: "react",
    path: "/icon/react.svg",
    url: "https://react.dev/",
  },
  {
    id: crypto.randomUUID(),
    name: "tailwindcss",
    path: "/icon/tailwindcss.svg",
    url: "https://tailwindcss.com/",
  },
  {
    id: crypto.randomUUID(),
    name: "vite",
    path: "/icon/vite.svg",
    url: "https://vite.dev/",
  },
  {
    id: crypto.randomUUID(),
    name: "storybook",
    path: "/icon/storybook.svg",
    url: "https://storybook.js.org/",
  },
  {
    id: crypto.randomUUID(),
    name: "figma",
    path: "/icon/figma.svg",
    url: "https://www.figma.com/",
  },
  {
    id: crypto.randomUUID(),
    name: "vscode",
    path: "/icon/vscode.svg",
    url: "https://code.visualstudio.com/",
  },
  {
    id: crypto.randomUUID(),
    name: "nodejs",
    path: "/icon/nodejs.svg",
    url: "https://nodejs.org/",
  },
  {
    id: crypto.randomUUID(),
    name: "appwrite",
    path: "/icon/appwrite.svg",
    url: "https://appwrite.io/",
  },
  {
    id: crypto.randomUUID(),
    name: "mongodb",
    path: "/icon/mongodb.svg",
    url: "https://www.mongodb.com/",
  },
  {
    id: crypto.randomUUID(),
    name: "postgres",
    path: "/icon/postgres.svg",
    url: "https://www.postgresql.org/",
  },
  {
    id: crypto.randomUUID(),
    name: "git",
    path: "/icon/git.svg",
    url: "https://git-scm.com/",
  },
  {
    id: crypto.randomUUID(),
    name: "github",
    path: "/icon/github.svg",
    url: "https://github.com/",
  },
  {
    id: crypto.randomUUID(),
    name: "c",
    path: "/icon/c.svg",
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    id: crypto.randomUUID(),
    name: "linux",
    path: "/icon/linux.svg",
    url: "https://www.linux.org/",
  },
] as const;

export { SKILLS };

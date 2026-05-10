import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";

const sounds = {
  click: "click.mp3",
  "give-give-theme": "give-give-theme.mp3",
} as const;

type SoundName = keyof typeof sounds;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ file: string }> },
) {
  const { file } = await params;

  if (!(file in sounds)) {
    notFound();
  }

  const soundPath = path.join(
    process.cwd(),
    "app/freelance/give-give/assets",
    sounds[file as SoundName],
  );
  const audio = await readFile(soundPath);

  return new Response(audio, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "audio/mpeg",
    },
  });
}

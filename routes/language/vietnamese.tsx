import Layout from "./_layout.tsx";
import Text from "../../islands/Text.tsx";
import { Word } from "../../components/Word.tsx";
import type { Handlers, PageProps } from "$fresh/server.ts";

interface WordData {
  word: string;
  language: "en" | "vn";
  translations: string[];
  familiarity: number;
  audio?: string | null;
}

export const handler: Handlers<WordData> = {
  async GET(_, ctx) {
    return ctx.render(
      await Promise.resolve({
        word: "xin chào",
        language: "vn",
        translations: ["hello"],
        familiarity: 0,
        audio: null,
      }),
    );
  },
};

export default function Vietnamese({ data }: PageProps<WordData>) {
  return (
    <Layout>
      <Word name="xin chào" className="flex justify-center text-6xl" />
      <div class="h-12"></div>
      <Text />
    </Layout>
  );
}

import { Head } from "$fresh/runtime.ts";
import Layout from "../layout.tsx";
import MultiCharacterInput from "../islands/MultiCharacterInput.tsx";
import { Word } from "../components/Word.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Learn Vietnamese</title>
      </Head>
      <Layout>
        <Word name="xin chào" className="flex justify-center text-6xl" />
        <div class="h-12"></div>
        <MultiCharacterInput
          amount={7}
          className="flex gap-4 justify-center text-4xl"
          letterClassName="border-b-2 border-vn-yellow font-mono text-center bg-transparent"
        />
      </Layout>
    </>
  );
}

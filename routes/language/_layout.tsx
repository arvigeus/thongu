import type { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Layout({ children }: { children: ComponentChildren }) {
  return (
    <>
      <Head>
        <title>Learn Vietnamese</title>
      </Head>
      <div
        class="bg-vn-red text-vn-yellow min-w-full min-h-screen"
        style={{ textShadow: "0 0 1px darkblue" }}
      >
        <div class="p-4 mx-auto max-w-screen-md flex flex-col">
          {children}
        </div>
      </div>
    </>
  );
}

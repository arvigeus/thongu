import type { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <div class="min-w-full min-h-screen">
        <Component />
      </div>
    </>
  );
}

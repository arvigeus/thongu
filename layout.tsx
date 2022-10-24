import type { ComponentChildren } from "preact";

export default function Layout({ children }: { children: ComponentChildren }) {
  return (
    <div
      class="bg-vn-red text-vn-yellow min-w-full min-h-screen"
      style={{ textShadow: "0 0 1px darkblue" }}
    >
      <div class="p-4 mx-auto max-w-screen-md flex flex-col">
        {children}
      </div>
    </div>
  );
}

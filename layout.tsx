import { ComponentChildren } from "preact";

export default function Layout({ children }: { children: ComponentChildren }) {
  return (
    <div
      class="min-w-full min-h-screen bg-vn-red text-vn-yellow"
      style={{ textShadow: "0 0 1px darkblue" }}
    >
      <div class="p-4 mx-auto max-w-screen-md flex flex-col">
        {children}
      </div>
    </div>
  );
}

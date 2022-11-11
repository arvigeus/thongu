export default function Text() {
  const letterStyle =
    "inline border-b-2 text-transparent border-vn-yellow mr-5";
  const letterAttributes = { style: { textShadow: "none" } };
  return (
    <div class="flex justify-center relative font-mono w-full text-4xl">
      <div class="relative flex flex-row">
        <textarea class="absolute w-full bg-transparent border-none resize-none outline-none tracking-[1.25rem]" />
        <div class={letterStyle} {...letterAttributes}>H</div>
        <div class={letterStyle} {...letterAttributes}>E</div>
        <div class={letterStyle} {...letterAttributes}>L</div>
        <div class={letterStyle} {...letterAttributes}>L</div>
        <div class={letterStyle} {...letterAttributes}>O</div>
      </div>
    </div>
  );
}

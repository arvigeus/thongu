import { useCallback, useMemo, useState } from "preact/hooks";
import type { JSX } from "preact/jsx-runtime";

export type InputPromptProps = {
  value: string;
  handleChange: JSX.GenericEventHandler<HTMLTextAreaElement>;
  type: "reveal" | "partial" | "minimal" | "letters" | "text" | "speech";
  answer: string;
  showAnswer: boolean;
};

export default function InputPrompt(
  { answer, type, showAnswer }: InputPromptProps,
) {
  const [response, setResponse] = useState<string>("");
  const updateText: JSX.GenericEventHandler<
    HTMLTextAreaElement
  > = useCallback(
    (e) => setResponse(e.currentTarget.value),
    [setResponse],
  );

  const answerLetters = useMemo(() => {
    const result: Record<string, boolean> = {};
    let chance = type === "partial" ? 0.5 : 0.25;
    for (const letter of answer) {
      let show = type === "reveal" || showAnswer;
      if (!show && type !== "text") {
        show = Math.random() > chance;
        if (show) chance /= 2;
        else chance *= 2;
      }
      result[letter] = show;
    }
    return result;
  }, [type, answer, showAnswer]);

  if (type === "text" && !showAnswer) {
    return (
      <textarea rowSpan={response.split("\n").length} onChange={updateText} />
    );
  }

  return (
    <div class="relative">
      <textarea
        class="absolute"
        onChange={!showAnswer ? updateText : undefined}
      />
      <div class="absolute">
        <div class="relative"></div>
      </div>
    </div>
  );
}

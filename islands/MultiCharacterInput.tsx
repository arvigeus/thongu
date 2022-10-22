import { createRef, JSX } from "preact";
import { useCallback, useMemo } from "preact/hooks";

import LetterInput from "./LetterInput.tsx";

export type MultiCharacterInputProps = {
  amount: number;
  onChange?: (value: string) => void;
  className?: string;
  letterClassName?: string;
};

export default function MultiCharacterInput(
  { amount, onChange, className, letterClassName }: MultiCharacterInputProps,
) {
  const inputRefs = useMemo(
    () => Array(amount).fill(0).map((_) => createRef<HTMLInputElement>()),
    [amount],
  );

  const focusElement = useCallback((index: number) => {
    if (index < 0 || index >= amount) return;
    const target = inputRefs[index].current;
    if (!target) return;
    if (!target.value) target.focus();
    else target.select();
  }, [amount]);

  const handleChange =
    (index: number): JSX.GenericEventHandler<HTMLInputElement> => () => {
      if (onChange) {
        onChange(
          inputRefs.map((ref) => ref.current?.value || " ").join("").trim(),
        );
      }
      focusElement(index + 1);
    };

  const handleFocus =
    (index: number): JSX.FocusEventHandler<HTMLInputElement> => (e) => {
      const target = inputRefs[index]?.current;
      if (target) {
        if (!target.value) {
          if (index === 0) return;
          const prevTarget = inputRefs[index - 1].current;
          if (prevTarget && prevTarget.value) return;
        } else {
          target.select();
          e.preventDefault();
          return false;
        }
      }

      // Select the most recent input element
      let lastTarget: HTMLInputElement | null = null;
      for (const ref of inputRefs) {
        if (!ref.current) break;
        lastTarget = ref.current;
        if (!lastTarget.value) break;
      }
      if (!lastTarget) return;
      if (!lastTarget.value) lastTarget.focus();
      else lastTarget.select();
      e.preventDefault();
    };

  const handleKeyDown =
    (index: number): JSX.KeyboardEventHandler<HTMLInputElement> =>
    (
      { target, key, preventDefault },
    ) => {
      if (!target) return;
      if (key === "Backspace") {
        if ((target as HTMLInputElement).value) return true;
        // preventDefault();
        for (let i = index; i < amount; i++) {
          const input = inputRefs[i].current;
          if (!input) break;
          input.value = inputRefs[i + 1]?.current?.value || "";
        }
        focusElement(index - 1);
        return true;
      } else if (key === "ArrowLeft") {
        // preventDefault();
        focusElement(index - 1);
        return true;
      } else if (key === "ArrowRight") {
        // preventDefault();
        focusElement(index + 1);
        return true;
      }
    };

  const handlePaste =
    (index: number): JSX.ClipboardEventHandler<HTMLInputElement> => (e) => {
      e.preventDefault();
      const data = e.clipboardData?.getData("text/plain") || "";
      const dataArray = data.split("").slice(0, amount - index);
      for (let i = index; i < dataArray.length; i++) {
        const input = inputRefs[i].current;
        if (!input) return;
        input.value = dataArray.shift() || "";
      }
      e.preventDefault();
    };

  return (
    <div className={className}>
      {new Array(amount).fill(amount).map((_, index) => (
        <LetterInput
          type="text"
          ref={inputRefs[index]}
          className={letterClassName}
          onChange={handleChange(index)}
          onFocus={handleFocus(index)}
          onKeyDown={handleKeyDown(index)}
          onPaste={handlePaste(index)}
        />
      ))}
    </div>
  );
}

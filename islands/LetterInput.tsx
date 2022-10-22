import { JSX, Ref } from "preact";
import { forwardRef } from "preact/compat";
import { WithRequired } from "../types/utils.tsx";

export type LetterInputType = Omit<
  WithRequired<
    JSX.HTMLAttributes<HTMLInputElement>,
    "onKeyDown" | "onChange" | "onFocus" | "onPaste"
  >,
  "maxLength"
>;

const LetterInput = forwardRef(
  (props: LetterInputType, ref: Ref<HTMLInputElement>) => {
    return (
      <input
        {...props}
        ref={ref}
        maxLength={1}
        style={{ width: "2ch" }}
      />
    );
  },
);

export default LetterInput;

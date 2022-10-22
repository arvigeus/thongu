import MultiCharacterInput from "./MultiCharacterInput.tsx";

type WordInputTextProps = {
  type: "text";
};

type WordInputCharactersProps = {
  type: "characters";
  count: number;
};

type WordInputProps = (WordInputTextProps | WordInputCharactersProps) & {
  wrapperClassName?: string;
  inputClassName?: string;
};

export default function WordInput(props: WordInputProps) {
  switch (props.type) {
    case "text":
      return (
        <div class={props.wrapperClassName}>
          <input type="text" class={props.inputClassName} />
        </div>
      );
    case "characters":
      return (
        <MultiCharacterInput
          amount={props.count}
          className={props.wrapperClassName}
          letterClassName={props.inputClassName}
        />
      );
    default:
      return null;
  }
}

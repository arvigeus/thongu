export type WordProps = {
  name: string;
  audio?: string;
  className?: string;
};

export function Word({ name, audio, className }: WordProps) {
  return <h1 className={className}>{name}</h1>;
}

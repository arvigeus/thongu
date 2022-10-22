export type WordProps = {
  name: string;
  audio?: string;
  className?: string;
};

export function Word({ name, audio, className }: WordProps) {
  return <div className={className}>{name}</div>;
}

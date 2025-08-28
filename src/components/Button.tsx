import type { VoteButtonProps } from "../interface/VoteButtonProps.ts";

export function VoteButton({ option, onVote }: VoteButtonProps) {
  return <button onClick={() => onVote(option)}>Vote</button>;
}

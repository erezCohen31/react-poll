import type { VoteButtonProps } from "../interface/VoteButtonProps.ts";

export default function VoteButton({ option, onVote }: VoteButtonProps) {
  return <button onClick={() => onVote(option)}>Vote</button>;
}

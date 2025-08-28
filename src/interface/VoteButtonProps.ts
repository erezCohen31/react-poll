import type { Option } from "./Option.ts";
export interface VoteButtonProps {
  option: Option;
  onVote: (option: Option) => void;
}

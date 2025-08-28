import { VoteButton } from "./Button.tsx";
import type { ContainerVotesProps } from "../interface/ContainerVotesProps.ts";
import "../style/ContainerVotes.css";

export function ContainerVotes({
  options,
  showResults,
  votes,
  handleVote,
}: ContainerVotesProps) {
  return (
    <ul id="liste">
      {options.map((option) => (
        <li key={option}>
          {option} {showResults && `- Votes: ${votes[option]}`}
          <VoteButton option={option} onVote={handleVote} />
        </li>
      ))}
    </ul>
  );
}

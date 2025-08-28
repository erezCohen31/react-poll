import { useState } from "react";
import "./App.css";
import VoteButton from "./components/Button.tsx";
import type { Option } from "./interface/Option.ts";

export default function App() {
  const options: Option[] = ["React", "Vue", "Svelte"];
  const [votes, setVotes] = useState<Record<Option, number>>({
    React: 0,
    Vue: 0,
    Svelte: 0,
  });
  const handleVote = (option: Option) => {
    setVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  return (
    <div>
      <h2>Mini Poll</h2>
      <ul>
        {options.map((option) => (
          <li key={option}>
            {option} - Votes: {votes[option]}
            <VoteButton option={option} onVote={handleVote} />
          </li>
        ))}
      </ul>
    </div>
  );
}

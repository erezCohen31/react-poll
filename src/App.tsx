import { useState } from "react";
import "./App.css";
import VoteButton from "./components/Button.tsx";
import { ResultButton } from "./components/ResultButton.tsx";
import type { Option } from "./interface/Option.ts";

export default function App() {
  const [options, setOptions] = useState<Option[]>(["React", "Vue", "Svelte"]);
  const [votes, setVotes] = useState<Record<Option, number>>({
    React: 0,
    Vue: 0,
    Svelte: 0,
  });
  const [showResults, setShowResults] = useState(false);
  const [newOption, setNewOption] = useState("");

  const handleVote = (option: Option) => {
    setVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };
  const handleAddOption = () => {
    if (!newOption.trim()) {
      alert("Please enter a name.");
      return;
    }
    setOptions((prev) => [...prev, newOption]);
    setVotes((prev) => ({ ...prev, [newOption]: 0 }));
    setNewOption("");
  };
  const getWinner = () => {
    const maxVotes = Math.max(...options.map((opt) => votes[opt]));

    const winners = options.filter((opt) => votes[opt] === maxVotes);

    if (winners.length === options.length) {
      return "It's a tie between everyone";
    } else if (winners.length > 1) {
      return "It's a tie between: " + winners.join(", ");
    } else {
      return `The winner is ${winners[0]} 🏆 with ${maxVotes} votes`;
    }
  };
  const handleResetVotes = () => {
    const resetVotes: { [key: string]: number } = {};
    options.forEach((option) => {
      resetVotes[option] = 0;
    });
    setVotes(resetVotes);
  };

  return (
    <div>
      <h2>Mini Poll</h2>
      {showResults && <span>{getWinner()}</span>}
      <ul>
        {options.map((option) => (
          <li key={option}>
            {option} {showResults && `- Votes: ${votes[option]}`}
            <VoteButton option={option} onVote={handleVote} />
          </li>
        ))}
      </ul>
      <ResultButton showResults={showResults} setShowResults={setShowResults} />
      <button onClick={handleResetVotes}>Reset Votes</button>
      <div>
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="Enter new option"
        />
        <button onClick={handleAddOption}>Add Option</button>
      </div>
    </div>
  );
}

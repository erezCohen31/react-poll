import { useState } from "react";
import "./App.css";
import { ResultButton } from "./components/ResultButton.tsx";
import { ContainerVotes } from "./components/ContainerVotes.tsx";
import { AddOption } from "./components/AddOption.tsx";
import "./App.css";

export default function App() {
  const [options, setOptions] = useState<string[]>(["React", "Vue", "Svelte"]);
  const [votes, setVotes] = useState<Record<string, number>>({
    React: 0,
    Vue: 0,
    Svelte: 0,
  });
  const [showResults, setShowResults] = useState(false);
  const [newOption, setNewOption] = useState("");

  const handleVote = (option: string) => {
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
    <div id="page">
      <h2>Mini Poll</h2>
      {showResults && <span id="result">{getWinner()}</span>}
      <ContainerVotes
        options={options}
        showResults={showResults}
        votes={votes}
        handleVote={handleVote}
      />
      <ResultButton showResults={showResults} setShowResults={setShowResults} />
      <button onClick={handleResetVotes}>Reset Votes</button>
      <AddOption
        newOption={newOption}
        setNewOption={setNewOption}
        handleAddOption={handleAddOption}
      />
    </div>
  );
}

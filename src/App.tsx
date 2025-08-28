import { useState } from "react";
import "./App.css";

type Option = "React" | "Vue" | "Svelte";

export default function App() {
  const options: Option[] = ["React", "Vue", "Svelte"];
  const [votes, setVotes] = useState<Record<Option, number>>({
    React: 0,
    Vue: 0,
    Svelte: 0,
  });

  return (
    <div>
      <h2>Mini Poll</h2>
      <ul>
        {options.map((option) => (
          <li key={option}>
            {option} - Votes: {votes[option]}
          </li>
        ))}
      </ul>
    </div>
  );
}

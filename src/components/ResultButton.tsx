import type { ResultButtonProps } from "../interface/ResultButtonProps.ts";

export function ResultButton({
  showResults,
  setShowResults,
}: ResultButtonProps) {
  return (
    <button onClick={() => setShowResults((prev) => !prev)}>
      {showResults ? "Hide Results" : "Show Results"}
    </button>
  );
}

import type { AddOptionProps } from "../interface/AddOptionProps.ts";
import "../style/AddOption.css";

export function AddOption({
  newOption,
  setNewOption,
  handleAddOption,
}: AddOptionProps) {
  return (
    <div id="">
      <input
        id="enterOP"
        type="text"
        value={newOption}
        onChange={(e) => setNewOption(e.target.value)}
        placeholder="Enter new option"
      />
      <button onClick={handleAddOption}>Add Option</button>
    </div>
  );
}

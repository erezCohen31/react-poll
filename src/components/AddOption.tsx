import type { AddOptionProps } from "../interface/AddOptionProps.ts";

export function AddOption({
  newOption,
  setNewOption,
  handleAddOption,
}: AddOptionProps) {
  return (
    <div>
      <input
        type="text"
        value={newOption}
        onChange={(e) => setNewOption(e.target.value)}
        placeholder="Enter new option"
      />
      <button onClick={handleAddOption}>Add Option</button>
    </div>
  );
}

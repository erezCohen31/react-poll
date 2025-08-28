export type ResultButtonProps = {
  showResults: boolean;
  setShowResults: (value: boolean | ((prev: boolean) => boolean)) => void;
};

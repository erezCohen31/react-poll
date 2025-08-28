export type ContainerVotesProps = {
  options: string[];
  showResults: boolean;
  votes: Record<string, number>;
  handleVote: (option: string) => void;
};

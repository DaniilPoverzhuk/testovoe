export default (word: string) =>
  word
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

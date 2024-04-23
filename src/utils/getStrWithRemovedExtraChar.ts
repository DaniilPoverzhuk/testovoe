export default (value: string, extraChar: string) => {
  if (!value) return;

  if (!value.includes(extraChar)) return value;

  return value.split(extraChar).join(" ");
};

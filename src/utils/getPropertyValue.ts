import { CSSProperties } from "react";

interface Props {
  dom: Element;
  property: keyof CSSProperties;
  type: "number" | "string";
}

type Response<T> = T extends number ? number : string;

export default <T extends number | string>({
  dom,
  property,
  type = "number",
}: Props): Response<T> => {
  const prop = property as unknown as number;

  if (type) {
    return +getComputedStyle(dom)[prop].slice(0, -2) as Response<T>;
  }

  return getComputedStyle(dom)[prop] as Response<T>;
};

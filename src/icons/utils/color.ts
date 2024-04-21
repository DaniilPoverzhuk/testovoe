import { Icon } from "@/types";

export default ({ isActive, defaultColor, activeColor }: Partial<Icon>) =>
  isActive ? activeColor : defaultColor || "none";

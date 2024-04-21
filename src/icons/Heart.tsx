import { Icon } from "@/types";
import color from "./utils/color";

const Heart = ({
  isActive = false,
  activeColor,
  defaultColor,
}: Partial<Icon>) => {
  return (
    <svg
      width="19.000000"
      height="19.000000"
      viewBox="0 0 17 11"
      fill={color({ isActive, activeColor, defaultColor })}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Vector"
        d=""
        fill="#5F2BFC"
        fillOpacity="0"
        fillRule="nonzero"
      />
      <path
        id="Vector"
        d="M0.16 4.26C0.16 8.85 5.58 13.01 8.5 13.98C11.41 13.01 16.83 8.85 16.83 4.26C16.83 1.73 14.78 -0.32 12.25 -0.32C10.7 -0.32 9.32 0.45 8.5 1.63C8.07 1.03 7.51 0.53 6.86 0.19C6.21 -0.14 5.48 -0.32 4.75 -0.32C2.21 -0.32 0.16 1.73 0.16 4.26Z"
        stroke="#5F2BFC"
        strokeOpacity="1.000000"
        strokeWidth="1.000000"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Heart;

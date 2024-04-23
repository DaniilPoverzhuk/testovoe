import getPropertyValue from "@/utils/getPropertyValue";
import { useRef, useEffect, useState } from "react";

export default () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    if (ref.current) {
      const newHeight = getPropertyValue<number>({
        dom: ref.current,
        property: "height",
        type: "number",
      });
      setHeight(newHeight);
    }
  }, [ref.current]);

  return { ref, height };
};

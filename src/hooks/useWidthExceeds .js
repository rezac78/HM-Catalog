import { useState, useEffect } from "react";

const useWidthExceeds = (widthThreshold) => {
  const [exceeds, setExceeds] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setExceeds(window.innerWidth > widthThreshold);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widthThreshold]);
  return exceeds;
};
export default useWidthExceeds;

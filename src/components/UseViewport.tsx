// This is a react hook which can be used in any component that needs to be responsive
// source: https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/

import { useState, useEffect } from "react";

const useViewport = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Make sure to access window only when in the browser
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Check if window is defined to ensure this code runs in the browser
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      window.addEventListener("resize", handleWindowResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleWindowResize);
      }
    };
  }, []);

  // Return both height and width, or undefined if not available
  return { height, width };
};

export default useViewport;

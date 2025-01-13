import { useState } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const darkModeHandler = () => {
    setIsDark((prev) => !prev);
  };

  return { darkModeHandler, isDark, setIsDark };
};

export default useDarkMode;
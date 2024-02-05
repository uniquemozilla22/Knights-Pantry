import { useCallback, useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(
    window.localStorage.getItem("theme")!
  );

  const setThemeAttribute = useCallback(() => {
    if (theme === "winter") {
      setTheme("dracula");
      window.localStorage.setItem("theme", "dracula");
      document.querySelector("html")?.setAttribute("data-theme", "dracula");
    } else {
      setTheme("winter");
      window.localStorage.setItem("theme", "winter");
      document.querySelector("html")?.setAttribute("data-theme", "winter");
    }
  }, [window.localStorage.getItem("theme")!]);

  useEffect(() => {
    if (!theme) {
      window.localStorage.setItem("theme", "winter");
    }
  }, []);

  return { theme, changeTheme: setThemeAttribute };
};

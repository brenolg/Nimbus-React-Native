import { createContext, useContext, useMemo, useState } from "react";
import { DarkTheme } from "./dark";
import { lightTheme } from "./light";

type ThemeType = "light" | "dark";

type ThemeContextData = {
  theme: typeof lightTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContextData);

export function AppThemeProvider({ children }: any) {
  const [mode, setMode] = useState<ThemeType>("light");

  function toggleTheme() {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }

  const theme = mode === "light" ? lightTheme : DarkTheme;

  const value = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

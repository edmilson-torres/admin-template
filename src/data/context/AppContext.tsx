import {
  createContext,
  ReactChild,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";

type Theme = "dark" | "";

interface AppContextProps {
  theme?: Theme;
  toggleTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  const [theme, setTheme] = useState<Theme>("");

  function toggleTheme() {
    setTheme(theme === "" ? "dark" : "");
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;

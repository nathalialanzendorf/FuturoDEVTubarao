import { createContext, useState } from 'react';
import { ReactNode } from 'react';

interface Theme {
    backgroundColor: string;
}

export const ThemeContext = createContext<Theme[]>([]);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme[]>([]);

    function handleChangeTheme(item: Theme) {
        setTheme([... theme, {
            backgroundColor: item.backgroundColor
        }])
    }

  return (
    <ThemeContext.Provider
    value={{ theme: theme, handleChangeTheme: handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

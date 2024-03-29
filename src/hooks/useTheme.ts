import { useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("light");

    return {
        theme,
        setTheme
    }
}
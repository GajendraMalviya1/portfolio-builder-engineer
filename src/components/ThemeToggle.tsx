
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check for user's preferred theme
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-secondary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? (
        <Moon size={18} className="opacity-70" />
      ) : (
        <Sun size={18} className="opacity-90" />
      )}
    </button>
  );
};

export default ThemeToggle;

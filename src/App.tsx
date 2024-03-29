import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { useTheme } from "./hooks/useTheme";
import { IconSun } from "./components/Icons/IconSun";
import { IconMoon } from "./components/Icons/IconMoon";
import { buttons } from "./config/buttons";

export type ButtonMetadata = {
  text: string;
  class: string;
};

function formatExpression(expression: string) {
  return expression.split(" ").map((item, index) => {
    if (["+", "-", "×", "÷"].includes(item)) {
      return (
        <span
          key={index}
          className='mx-4 text-slate-900 dark:text-sky-800 font-bold text-[1rem]'
        >
          {item}
        </span>
      );
    }
    return item + " ";
  });
}

const App = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const { theme, setTheme } = useTheme();

  const handleButtonClick = (buttonText: string) => {
    if (["+", "-", "×", "÷"].includes(buttonText)) {
      setExpression((prev) => `${prev} ${buttonText} `);
    } else if (buttonText === "C") {
      setExpression("");
      setResult("");
    } else if (buttonText === "←") {
      setExpression((prev) => prev.trim().slice(0, -1).trim() + " ");
    } else if (buttonText === "=") {
      try {
        const resultExpression = expression.replace(/\s+/g, "");
        const calculatedResult = eval(resultExpression);
        setResult(calculatedResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setExpression((prev) => prev + buttonText);
    }
  };

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      return;
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <>
      <button
        className='fixed right-4 top-4 dark:bg-slate-950 bg-secondary p-1 rounded-xl hover:ring-4 hover:transition-all'
        onClick={handleThemeChange}
      >
        {theme === "light" ? (
          <IconSun className='text-white ' />
        ) : (
          <IconMoon className='text-white' />
        )}
      </button>

      <main className='w-[340px] mx-auto mt-14 rounded-xl overflow-hidden shadow-lg '>
        <div className='text-white bg-secondary p-5 flex justify-end dark:bg-slate-950 tracking-wide'>
          {formatExpression(expression)}
        </div>

        <div className='text-white bg-secondary p-5 flex justify-between dark:bg-slate-950'>
          <h1 className='text-3xl font-semibold'>=</h1>
          <h1 className='text-3xl font-semibold'>{result}</h1>
        </div>

        <div className='bg-white dark:bg-slate-800 p-5 h-[400px] grid grid-cols-4 '>
          {buttons.map((button) => (
            <Button
              key={button.text}
              text={button.text}
              class={button.class}
              onClick={() => handleButtonClick(button.text)}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;

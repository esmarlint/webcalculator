import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  type Info = {
    text: string;
    class: string;
  };

  const buttons: Info[] = [
    {
      text: "%",
      class: "text-secondary bg-primary",
    },
    {
      text: "C",
      class: "text-secondary bg-primary",
    },
    {
      text: "←",
      class: "text-secondary bg-primary",
    },
    {
      text: "÷",
      class: "text-secondary bg-primary",
    },
    {
      text: "1",
      class: "text-secondary bg-[#edf9ff] ",
    },
    {
      text: "2",
      class: "text-secondary bg-[#edf9ff] ",
    },
    {
      text: "3",
      class: "text-secondary bg-[#edf9ff] ",
    },
    {
      text: "×",
      class: "text-secondary bg-primary",
    },
    {
      text: "4",
      class: "text-secondary bg-[#edf9ff] ",
    },
    {
      text: "5",
      class: "text-secondary bg-[#edf9ff] ",
    },
    {
      text: "6",
      class: "text-secondary bg-[#edf9ff] ",
    },
    {
      text: "-",
      class: "text-secondary bg-primary",
    },
    {
      text: "7",
      class: "text-secondary bg-[#edf9ff] ",
    },
    {
      text: "8",
      class: "text-secondary bg-[#edf9ff] ",
    },
    {
      text: "9",
      class: "text-secondary bg-[#edf9ff] ",
    },
    {
      text: "+",
      class: "text-secondary bg-primary",
    },
    {
      text: "±",
      class: "text-secondary bg-[#edf9ff] ",
    },
    {
      text: "0",
      class: "text-secondary bg-[#edf9ff] ",
    },
    {
      text: ".",
      class: "text-secondary bg-[#edf9ff] ",
    },
    {
      text: "=",
      class:
        "text-white font-semibold m-3 bg-secondary hover:bg-blue-500 transition-all active:ring-4",
    },
  ];

  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (buttonText: string) => {
    if (buttonText === "C") {
      setExpression("");
      setResult("");
    } else if (buttonText === "←") {
      setExpression((prevExpression) => prevExpression.slice(0, -1));
    } else if (buttonText === "=") {
      try {
        const calculatedResult = eval(expression);
        setResult(calculatedResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setExpression((prevExpression) => prevExpression + buttonText);
    }
  };

  return (
    <>
      <main className='bg-red-500 w-[340px] mx-auto mt-14 rounded-xl overflow-hidden shadow-lg'>
        <div className='text-white bg-secondary p-5 flex justify-end'>
          {expression}
        </div>
        <div className='text-white bg-secondary p-5 flex justify-between'>
          <h1 className='text-3xl font-semibold'>=</h1>
          <h1 className='text-3xl font-semibold'>{result}</h1>
        </div>
        <div className='bg-white p-5 h-[400px] grid grid-cols-4 '>
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
}

export default App;

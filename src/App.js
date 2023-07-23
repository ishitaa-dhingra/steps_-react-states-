import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setstep] = useState(1);
  const [isopen, setisopen] = useState(true);

  function handlePrevious() {
    if (step > 1) setstep((step) => step - 1);
    // ------------------------------------------ this version is better than below
  }

  function handleNext() {
    if (step < 3) setstep(step + 1);
  }

  return (
    // -------------------------we dont want the components inside some other component thus we used fragmentation
    <>
      <div>
        <button className="close" onClick={() => setisopen((is) => !is)}>
          &times;
        </button>
      </div>

      {isopen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active " : ""}`}>1</div>
            <div className={`${step >= 2 ? "active " : ""}`}>2</div>
            <div className={`${step >= 3 ? "active " : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              {/* ---------------------------------------------here we dont call function (handlePrevious())because we have to call fuction when clicked */}
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

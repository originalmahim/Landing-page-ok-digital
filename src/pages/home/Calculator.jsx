import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const toEn = n => n.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d));


console.log(toEn("৪৫") )
const toBn = (n) => n.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);

// Example usage
const englishNumber = "123456";
const bengaliNumber = toBn(englishNumber);

console.log(bengaliNumber); // Output: "১২৩৪৫৬"


  const handleInputChange = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };
  return (
    <div>
      <div>
        <div>
          <input type="text" value={input} readOnly />
        </div>
        <div>
          <button onClick={() => handleInputChange("১")}>১</button>
          <button onClick={() => handleInputChange("২")}>২</button>
          {/* Add buttons for other Bengali digits */}
          <button onClick={() => handleInputChange("+")}>+</button>
          <button onClick={() => handleInputChange("÷")}>÷</button>
        </div>
        <div>
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleCalculate}>=</button>
        </div>
        <div>
          <p>Result: {result}</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

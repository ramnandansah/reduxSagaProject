import { useState } from "react";

const DebounceComponent = () => {
  const [inputValue, setInputValue] = useState("");

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      console.log("###1 - ", ...args);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle input change using debounced function
  const handleInputChange = debounce(onInputChange, 500);

  // handleInputChange({ target: { value: "Hello" } });

  return (
    <div className="p-5">
      <p className="mt-2 p-4 border border-green-400 bg-green-400 text-white rounded mb-8">
        Value: {inputValue}
      </p>

      <input
        type="text"
        className="border rounded p-2 w-full"
        placeholder="Type here..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default DebounceComponent;

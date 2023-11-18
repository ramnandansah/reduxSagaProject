import { useState } from "react";

const ThrottleComponent = () => {
  const [inputValue, setInputValue] = useState("");

  // Throttle function
  const throttle = (fn, delay) => {
    // Please write the body here
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle input change using debounced function
  const handleInputChange = throttle(onInputChange, 500);

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

export default ThrottleComponent;

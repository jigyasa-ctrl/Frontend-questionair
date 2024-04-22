// define purpose of useRef with real life use cases and best practices

// useRef is a hook in React that allows you to create a mutable object that persists across renders and doesn't trigger re-renders when its value changes.
// some real-life use cases and best practices for useRef:

// 1. Accessing DOM elements: One common use case is accessing and manipulating DOM elements directly. Since manipulating the DOM directly in React is generally discouraged, useRef provides a safer way to access DOM elements without causing unnecessary re-renders.

//  below code focuses on the input element when clicked on focus input

import React, { useRef } from "react";

function FocusExample() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // Focus on the input field when the button is clicked
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}

export default FocusExample;

// 2. Storing mutable values without triggering re-renders:  Sometimes, you need to store values that might change but don't want to trigger re-renders when they do

import React, { useRef, useState } from 'react';

function MyComponent() {
  const renderCount = useRef(0);

  renderCount.current++;

  return <div>Render count: {renderCount.current}</div>;
}

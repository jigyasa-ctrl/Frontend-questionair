// useMemo is used to memoize the result of a computation so that it's only recalculated when one of its dependencies changes.

// 1. Expensive Computations:  - When you have a computation that is expensive in terms of CPU or memory usage, and its result doesn't change unless certain dependencies changeimport React, { useMemo } from 'react';

function ExpensiveComponent({ data }) {
  const formattedData = useMemo(() => {
    // Expensive computation to format data
    return data.map(item => item * 2);
  }, [data]); // Recalculate only if 'data' changes

  return <div>{formattedData}</div>;
}

// 2. Avoiding Unnecessary Re-renders: When you want to avoid unnecessary re-renders caused by computations that haven't changed.

import React, { useMemo } from 'react';

function MemoizedComponent({ value }) {
  const result = useMemo(() => {
    // Some heavy computation based on 'value'
    return computeResult(value);
  }, [value]); // Recalculate only if 'value' changes

  return <div>{result}</div>;
}

//useCallback

// 1. useCallback is used to memoize callbacks, preventing unnecessary re-renders of child components that rely on them. It returns a memoized version of the callback function.


import React, { useCallback } from 'react';

function ParentComponent() {
  const handleClick = useCallback(() => {
    // Handle click logic
  }, []); // No dependencies, callback won't change

  return <ChildComponent onClick={handleClick} />;
}

const ChildComponent = React.memo(({ onClick }) => {
  // Render child component
});



// 2. Optimizing Performance in Event Handlers: When defining event handlers for elements inside a component, 
// and those event handlers depend on some props or state, using useCallback ensures that the handler doesn't change unless its dependencies change.

import React, { useCallback, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency 'count' ensures that callback is re-created when 'count' changes

  return (
    <div>
      Count: {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
}



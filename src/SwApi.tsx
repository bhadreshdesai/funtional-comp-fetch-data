import React, { useState, useEffect } from "react";

function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// https://swapi.dev/
export default function SwApi() {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    // https://dev.to/juliang/loading-and-displaying-data-with-hooks-jlj
    // https://github.com/JulianG/minimal-state-management-demo/blob/03-handling-error-pending-2/src/App.tsx
    // implement loading...
    await sleep(5000);
    const res = await fetch("https://swapi.dev/api/planets/1/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <span>{JSON.stringify(planets, null, 2)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
}

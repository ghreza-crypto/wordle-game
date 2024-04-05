import { useState } from "react";
import { useEffect } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null)
  const solutions = ["alert", "beach", "spade", "pools", "drive", "relax", "times", "train", "cores", "blame", "banks",
    "phone", "bling", "coins", "hello", "pours","about","layer","lying","ocean","learn","magic","offer","lease","major"]

  useEffect(() => {
    setSolution(solutions[Math.floor(Math.random() * solutions.length)])
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordle Game</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;

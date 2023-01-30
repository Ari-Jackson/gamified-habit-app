import { useState } from "react";
import { Todo } from "./Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App h-screen bg-teal-500">
      <Todo />
    </div>
  );
}

export default App;

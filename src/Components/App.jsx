import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Habit from "./Habit";
import Todo from "./Todos";

function App() {
  return (
    <div className="App h-screen bg-teal-500">
      <h1 className=" pb-5 text-center text-slate-200">Habit App</h1>
      <div className="m-auto mb-2 w-fit">
        <FontAwesomeIcon className="text-3xl text-white" icon={faPlus} />
      </div>
      <Habit todoTitle={"Wash Dishes"} emoji={"🍽"} total={1} />
      <Habit todoTitle={"Drink Water"} emoji={"💦"} total={8} units={"cups"} />
      <Habit todoTitle={"Meditate"} emoji={"🧘🏽‍♀️"} total={25} units={"minutes"} />
      <Todo todoTitle={"Meditate @ Home"} emoji={"🧘🏽‍♀️"} />
    </div>
  );
}

export default App;

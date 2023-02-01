import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Habit from "./Habit";
import Todo from "./Todos";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App ">
      <div className="fixed h-screen w-screen bg-hero-background bg-cover bg-no-repeat">
        <SideBar />
        <img
          src="src/assets/images/f5a885b5d781e05edde29c4eb8ec48ee61904b62.png"
          className="fixed right-24 h-screen"
        />
        {/* <Habit todoTitle={"Wash Dishes"} emoji={"🍽"} total={1} />
        <Habit
          todoTitle={"Drink Water"}
          emoji={"💦"}
          total={8}
          units={"cups"}
        />
        <Habit
          todoTitle={"Meditate"}
          emoji={"🧘🏽‍♀️"}
          total={25}
          units={"minutes"}
        />
        <Todo todoTitle={"Meditate @ Home"} emoji={"🧘🏽‍♀️"} /> */}
        <StatsCard />
      </div>
      <Habit todoTitle={"Wash Dishes"} emoji={"🍽"} total={1} />
      <Habit todoTitle={"Drink Water"} emoji={"💦"} total={8} units={"cups"} />
      <Habit todoTitle={"Meditate"} emoji={"🧘🏽‍♀️"} total={25} units={"minutes"} />
      <Todo todoTitle={"Meditate @ Home"} emoji={"🧘🏽‍♀️"} />
    </div>
  );
}

export default App;

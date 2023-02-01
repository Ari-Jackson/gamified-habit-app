import Habit from "./Habit";
import Todo from "./Todos";
import SideBar from "./SideBar";
import StatsCard from "./StatsCard";

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
    </div>
  );
}

export default App;

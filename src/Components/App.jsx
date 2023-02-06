import SideBar from "./SideBar";
import MainStatsCard from "./MainStatsCard";

export default function App() {
  return (
    <main className="App">
      <div className="fixed h-full w-full bg-hero-background bg-cover bg-no-repeat">
        <SideBar />
        <img
          src="src/assets/images/f5a885b5d781e05edde29c4eb8ec48ee61904b62.png"
          className="fixed right-24 h-screen"
        />
        <MainStatsCard />
      </div>
    </main>
  );
}

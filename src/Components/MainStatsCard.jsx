import DailySummary from "./DailySummary";
import CharcterInfo from "./CharacterInfo";
import StatusBox from "./StatusBox";
import { faCoins, faGem, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function MainStatsCard() {
  return (
    <div className="ml-40 mt-20 h-auto w-[650px] max-w-7xl space-y-0 space-x-6 rounded-xl bg-white pb-3">
      <div className="flex h-auto w-full flex-col">
        {/* ------------------------------------ Character Info ------------------------------------*/}
        <CharcterInfo />
        <hr />
        {/* ------------------------------------ Status Bars ------------------------------------*/}

        <div className="mx-6 my-2 flex h-fit flex-col rounded-md p-5 font-tech text-lg hover:cursor-pointer hover:bg-slate-200">
          <div className="mx-1 flex items-center">
            <p className="flex-grow text-2xl">XP</p>
            <p>1500</p>
          </div>
          <ProgressBar completed={(750 / 1500) * 100} />
        </div>
        <div className="mx-6 my-2 flex h-24 justify-around space-x-5">
          {statBoxInfo.map(({ title, number, icon, color }) => (
            <StatusBox
              title={title}
              number={number}
              icon={icon}
              color={color}
            />
          ))}
        </div>
        <DailySummary />
      </div>
    </div>
  );
}

{
  /* ------------------------------------ Status Box Info ------------------------------------*/
}

let statBoxInfo = [
  { title: "Gold", number: 365, icon: faCoins, color: "text-amber-500" },
  { title: "Mana", number: 10, icon: faGem, color: "text-cyan-500" },
  { title: "Heart", number: 12, icon: faHeart, color: "text-rose-500" },
];

{
  /* ------------------------------------ Progress Bars ------------------------------------*/
}

const ProgressBar = ({ completed }) => {
  const fillerStyles = {
    width: `${completed}%`,
  };

  return (
    <div className="h-4 w-full rounded-full bg-gray-300">
      <div
        className={"h-full rounded-full bg-yellow-200 text-right"}
        style={fillerStyles}
      ></div>
      <span></span>
    </div>
  );
};

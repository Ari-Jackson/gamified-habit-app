import Habit from "./Habit";

export default function DailySummary() {
  return (
    <div className="my-2 mx-6 flex flex-col rounded-2xl bg-slate-100 p-3 shadow-sm hover:cursor-pointer hover:bg-slate-200 hover:shadow-lg">
      <div className="flex items-center p-5">
        <p className="text-xl">Today's Summary </p>
        <span className="ml-2 pt-2 text-slate-400">
          ·{" "}
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
      <div className="flex-box-center w-full items-center p-2">
        <ProgressBar completed={40} />
        <p></p>
      </div>
      <p className="p-3 text-center text-xl">✨ Custom message: Wooo! ✨</p>
      <Habit title={"Crunch time!"} total={25} emoji={"🏋🏽"} />
    </div>
  );
}

{
  /* ------------------------------------ Progress Bars ------------------------------------*/
}

const ProgressBar = ({ completed }) => {
  const fillerStyles = {
    width: `${completed}%`,
  };

  return (
    <div className="h-3 w-9/12 rounded-full bg-gray-300">
      <div
        className={"h-full rounded-full bg-yellow-200 text-right"}
        style={fillerStyles}
      ></div>
      <span></span>
    </div>
  );
};

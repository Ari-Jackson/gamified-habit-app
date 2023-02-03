import Card from "./Card";

export default function StatsCard() {
  return (
    <div className="ml-56 mt-20 h-4/5 w-5/12">
      <Card>
        <div className="flex h-auto w-full flex-col">
          <div className="flex items-center justify-center space-x-6 p-6">
            <div className="h-24 w-24 rounded-full bg-fuchsia-500">
              <p className=" text-center">Logo</p>
            </div>
            <div className="mt-4 w-full">
              <h1 className="text-left font-bold text-slate-700">
                Ari-the-don
              </h1>
              <h3 className="text-2xl text-slate-600">Level 1</h3>
            </div>
          </div>
          <hr />
          <div className=" mx-8 flex h-20 items-center justify-center rounded-md">
            <p className=" mr-3 text-3xl">XP</p>
            <ProgressBar completed={(500 / 1500) * 100} />
            <p className="ml-3">1500</p>
          </div>
          <div className="flex">
            <StatusBox title={"Mana"} />
            <StatusBox title={"Gold"} />
            <StatusBox title={"Hearts"} />
          </div>
          <div className="mx-auto h-5/6 w-10/12 rounded-lg hover:cursor-pointer hover:border-2 hover:border-slate-500 ">
            <div className="m-auto my-10 box-border h-4/5 w-4/5 rounded-2xl bg-slate-100 p-4 py-4">
              <div className="flex items-center">
                <p className="p-2 text-xl">Today's Summary </p>
                <span className="">{Date.now()}</span>
              </div>
              <div className="flex justify-center p-2">
                <ProgressBar completed={40} />
              </div>
              <p className="p-3 text-center text-xl">✨custom hightlight✨</p>
              <div className="text-center">
                <p className="p-4 text-3xl">Next Task</p>
                <p className="text-2xl  opacity-50">next task</p>
                <p className="text-xl  opacity-30">next task</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

const StatusBox = ({ title }) => {
  return (
    <div className="mx-8 flex h-20 w-1/4 items-center justify-center rounded-md hover:cursor-pointer hover:border-2 hover:border-slate-600">
      <p>{title}</p>
      <div className="h-2 w-8/12 rounded-full bg-slate-200"></div>
    </div>
  );
};

const ProgressBar = ({ completed }) => {
  const fillerStyles = {
    width: `${completed}%`,
  };

  return (
    <div className="h-2 w-8/12 rounded-full bg-slate-200">
      <div
        className={"h-full rounded-full bg-yellow-200 text-right"}
        style={fillerStyles}
      ></div>
      <span></span>
    </div>
  );
};

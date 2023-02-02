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
            <p className="ml-3">1500</p>
            <ProgressBar completed={(500 / 1500) * 100} />
          </div>
        </div>
      </Card>
    </div>
  );
}

const ProgressBar = ({ completed }) => {
  console.log(completed);
  const fillerStyles = {
    width: `${completed}%`,
  };

  return (
    <div className="h-2 w-8/12 rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-yellow-200 text-right"
        style={fillerStyles}
      ></div>
      <span></span>
    </div>
  );
};

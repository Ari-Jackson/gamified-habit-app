import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StatusBox({ title, number, icon, color }) {
  return (
    <div className="h-full w-2/4 rounded-md text-center font-tech hover:cursor-pointer hover:bg-slate-200 hover:shadow-md">
      <p className={color}>{title}</p>
      <div className="flex-box-center">
        <FontAwesomeIcon icon={icon} className={color + " text-5xl"} />
        <div className="-ml-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50">
          <span className={color + " text-2xl"}>{number}</span>
        </div>
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faScroll,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

const menueItems = [
  { icon: <FontAwesomeIcon icon={faHome} />, text: "Home" },
  { icon: <FontAwesomeIcon icon={faUser} />, text: "My Character" },
  { icon: <FontAwesomeIcon icon={faScroll} />, text: "My Missions" },
  { icon: <FontAwesomeIcon icon={faToolbox} />, text: "My Invetory" },
];

export default function SideBar() {
  return (
    <nav>
      <div className="fixed top-0 left-0 m-0 flex h-screen w-20 flex-col bg-violet-500 text-white shadow-sm">
        {menueItems.map(({ icon, text }) => (
          <div
            key={text}
            className="group relative my-2 mx-auto flex h-14 w-14 cursor-pointer items-center justify-center rounded-3xl bg-violet-200 text-violet-900 transition-all duration-300 ease-linear hover:rounded-xl hover:bg-violet-900 hover:text-violet-200"
          >
            {icon}
            <span className="absolute left-14 m-4 w-auto min-w-max scale-0 rounded-md bg-violet-500 p-2 text-xs font-bold text-white shadow-md transition-all duration-300 group-hover:scale-100">
              {text}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
}

import { HiPlus } from "react-icons/hi";
import {
  HiHome,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
import Search from "./Search";
function Header() {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
      path: "/",
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
      path: "/watchlist",
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
      path: "/movies",
    },
    {
      name: "TV SERIES",
      icon: HiTv,
      path: "/tv",
    },
  ];
  const menuElement = menu.map((item) => {
    return (
      <HeaderItem name={item.name} Icon={item.icon} namePath={item.path} />
    );
  });
  return (
    <div className="flex items-center gap-8 justify-between p-5 ">
      <div className="flex items-center gap-8">
        <img
          src="./images/logo.png"
          className="w-[80px] 
        md:w-[115px] object-cover"
        />
        {menuElement}
      </div>
      <Search />
      <img src="./images/profile.jpg" className="w-[40px] rounded-full" />
    </div>
  );
}

export default Header;

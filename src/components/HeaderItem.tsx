import { IconType } from "react-icons";
import { Link } from "react-router-dom";

function HeaderItem(props: { name: string; Icon: IconType; namePath: string }) {
  const { name, Icon, namePath } = props;
  return (
    <Link to={namePath}>
      <div className="text-white flex item-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8">
        <Icon />
        <h2 className="hidden md:block ml-3">{name}</h2>
      </div>
    </Link>
  );
}

export default HeaderItem;

import disney from "../../public/images/disney.png";
import marvel from "../../public/images/marvel.png";
import nationalG from "../../public/images/nationalG.png";
import pixar from "../../public/images/pixar.png";
import starwar from "../../public/images/starwar.png";
import disneyV from "../../public/videos/disney.mp4";
import marvelV from "../../public/videos/marvel.mp4";
import nationalGV from "../../public/videos/national-geographic.mp4";
import pixarV from "../../public/videos/pixar.mp4";
import starwarV from "../../public/videos/star-wars.mp4";
import { Link } from "react-router-dom";

function AnimatedCard() {
  const AnimatedList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
      name: "disney",
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
      name: "marvel",
    },
    {
      id: 3,
      image: pixar,
      video: pixarV,
      name: "pixar",
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
      name: "starwar",
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGV,
      name: "nationalgeographic",
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {AnimatedList.map((item) => {
        return (
          <Link to={`${item.name}`}>
            <div className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black">
              <video
                src={item.video}
                autoPlay
                loop
                playsInline
                muted
                className=" absolute rounded-md z-0 opacity-0 hover:opacity-50 w-full"
              />
              <img src={item.image} className="w-full z-[1]" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AnimatedCard;

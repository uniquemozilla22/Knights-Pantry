import { Fade, Popup, Slide } from "../../UI/Animation";

const Home = () => {
  return (
    <div className="relative h-full">
      <div className="flex flex-col align-middle gap-2 ">
        <Popup>
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Bridgeport_Purple_Knight_logo.svg/800px-Bridgeport_Purple_Knight_logo.svg.png"
            }
            alt={"Welcome to Knights Pantry"}
            className="h-[80%]"
          />
        </Popup>
        <Slide>
          <Fade delay={10}>
            <h1 className="text-7xl font-black text-center">
              {"Welcome to Knights Pantry"}
            </h1>
          </Fade>
        </Slide>
      </div>
    </div>
  );
};

export default Home;

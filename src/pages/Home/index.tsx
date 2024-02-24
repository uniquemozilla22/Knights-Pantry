import { Fade, Slide } from "../../UI/Animation";
import { ClockIcon, MailIcon } from "../../assets/Icon";
import { Button } from "../../UI/Button";
import { Layout } from "../../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="h-screen flex items-center w-full">
        <div className="flex flex-col align-middle justify-center items-center gap-2 w-full h-full">
          <Fade className="" delay={500}>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Bridgeport_Purple_Knight_logo.svg/800px-Bridgeport_Purple_Knight_logo.svg.png"
              }
              alt={"Welcome to Knights Pantry"}
              className={"h-[70vh]"}
            />
          </Fade>
          <div>
            <Slide delay={500} reverse>
              <Fade delay={500}>
                <h1 className="text-7xl font-black text-center">
                  {"Welcome to Knights Pantry"}
                </h1>
              </Fade>
            </Slide>
            <div className="flex gap-10 items-center justify-center mt-5">
              <Slide delay={800} reverse>
                <Fade delay={800}>
                  <Button title="See Schedules">
                    <ClockIcon size={32} />
                  </Button>
                </Fade>
              </Slide>
              <Slide delay={900} reverse>
                <Fade delay={800}>
                  <Button
                    title="Mail for Appointments"
                    onClick={() =>
                      (window.location.href =
                        "mailto:" + "knightspantry@bridgeport.edu")
                    }
                  >
                    <MailIcon size={40} />
                  </Button>
                </Fade>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

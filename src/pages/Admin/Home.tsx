import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className=" flex flex-wrap flex-col gap-5">
      <div className="text-md">
        <h2 className="text-xl  ">
          Welcome! Melanie , Here are the stats for today
        </h2>
      </div>
      <div className="flex gap-6 flex-wrap w-full">
        <div className=" flex-1 p-4 border-2 min-h-max   min-w-max  grid place-items-center rounded   ">
          <p className="text-4xl m-6">88+</p>
          <p className="text-sm ">Visits today</p>
        </div>
        <div className="flex-1  p-4  border-2 min-h-max  min-w-max grid place-items-center rounded   ">
          <p className="text-4xl m-6">88+</p>
          <p className="text-sm ">Visits today</p>
        </div>
        <div className="flex-1 p-4  border-2 min-h-max  min-w-max  grid place-items-center rounded   ">
          <p className="text-4xl m-6">88+</p>
          <p className="text-sm ">Visits today</p>
        </div>
        <div className="flex-1 p-4  border-2 min-h-max  min-w-max  grid place-items-center rounded   ">
          <p className="text-4xl m-6 m-6m-6">88+</p>
          <p className="text-sm ">Visits today</p>
        </div>
        <div className="flex-1 p-4 border-2 min-h-max  min-w-max  grid place-items-center rounded   ">
          <p className="text-4xl m-6">88+</p>
          <p className="text-sm ">Visits today</p>
        </div>
      </div>
      <div className="">
        <div className="mb-5">
          <h2 className="text-lg">Actions</h2>
        </div>
        <div className="flex gap-6 flex-wrap w-full">
          <Link
            to="./manage/users"
            className="btn btn-wide flex-1 p-4 min-w-max"
          >
            <p className="">Manage Users</p>
          </Link>
          <Link
            to="./manage/steps"
            className="btn btn-wide flex-1 p-4 min-w-max"
          >
            <p className="">Manage Steps</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

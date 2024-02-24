"use server";
import { useState } from "react";
import { Button } from "../../UI/Button";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target["user-name"].value);
    console.log(event.target["user-password"].value);
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="card flex flex-col gap-2  bg-secondary p-5"
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input
              type="text"
              name="user-name"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text-alt">Bottom Left label</span>
            </div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input
              type="password"
              name="user-password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text-alt">Bottom Left label</span>
            </div>
          </label>

          <Button title="Submit Form" className="">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;

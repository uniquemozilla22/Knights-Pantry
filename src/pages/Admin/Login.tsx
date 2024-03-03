import { Button } from "../../UI/Button";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser(
      event.target["user-name"].value,
      event.target["user-password"].value
    );
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
              <label htmlFor="name-user" className="label-text">
                Email
              </label>
            </div>
            <input
              id="name-user"
              type="email"
              name="user-name"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <label htmlFor="password-user" className="label-text">
                Password
              </label>
            </div>
            <input
              id="password-user"
              type="password"
              name="user-password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
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

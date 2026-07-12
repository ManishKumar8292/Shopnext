import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Button, Input } from "../index";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  let userData = useContext(UserContext);
  let navigate = useNavigate();

  let { setUser } = userData;

  const handleLogin = (e) => {
    let { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.username === "" || data.password === "") {
      toast.error("Please Enter Username & Password");
    } else {
      setUser(data);
      navigate("/");
      toast.success("Successfully Login..");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full my-10 max-w-md rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500   backdrop-blur-xl border border-white/20 shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-200 mt-2">Sign in to continue</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <Input
              handleOnChange={handleLogin}
              varient="transparent"
              text="Username"
              type="text"
              placeholder="Enter your Username"
              name="username"
              value={data.username}
            />
          </div>

          <div>
            <Input
              handleOnChange={handleLogin}
              varient="transparent"
              text="Password"
              type="password"
              placeholder="Enter your Password"
              name="password"
              value={data.password}
            />
          </div>

          <div className="flex items-center justify-end text-sm text-white">
            <Link to="/" className="hover:underline">
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            varient="outline"
            className="w-full"
            text="Login"
            handleButton={handleSubmit}
          />
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-white/30"></div>
          <span className="px-3 text-gray-200 text-sm">OR</span>
          <div className="flex-1 border-t border-white/30"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button text="Google" varient="outline" />
          <Button text="Facebook" varient="primary" />
        </div>

        <p className="text-center text-gray-200 mt-8">
          Don't have an account?
          <Link to="#" className="font-semibold text-white hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

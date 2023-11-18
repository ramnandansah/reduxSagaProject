import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  const token = useSelector((state) => state?.auth?.token);

  return token ? (
    <Navigate to="/" replace={true} />
  ) : (
    <div className="h-screen bg-gray-200 pt-32">
      <div className="w-96 border rounded-md overflow-hidden bg-white mx-auto">
        <ul className="flex bg-gray-700 text-slate-300">
          <li className="w-full">
            <button
              className={`inline-block w-full p-2 border-4 border-gray-700 ${
                activeTab === "login" ? "text-white border-b-green-500" : ""
              }`}
              type="button"
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
          </li>
          <li className="w-full">
            <button
              className={`inline-block w-full p-2 border-4 border-gray-700 ${
                activeTab === "signup" ? "text-white border-b-green-500" : ""
              }`}
              type="button"
              onClick={() => setActiveTab("signup")}
            >
              Sign up
            </button>
          </li>
        </ul>

        {/* {activeTab === "login" ? <h2>Login</h2> : <h2>Sign up</h2>} */}
        {activeTab === "login" ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default Auth;

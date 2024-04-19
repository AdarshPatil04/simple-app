import { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "../../zod";
import { BACKEND_URL } from "../../config";

import axios from "axios";
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {
      // const response = await axios.post(
      //   `${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`,
      //   postInputs
      // );
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="font-poppins flex justify-center flex-col items-center h-screen">
      <div className="flex flex-col justify-center">
        <div>
          <div className="text-2xl sm:text-3xl pl-2.5 flex justify-center">
            {type === "signin" ? "Login" : "Create an account"}
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-400 pl-6 sm:items-center">
            {type == "signin"
              ? "Don't have an account?"
              : "Already have an account?"}
            <Link
              className="pl-2 underline"
              to={type === "signup" ? "/signin" : "/signup"}
            >
              {type === "signup" ? "Sign in" : "Sign up"}
            </Link>
          </div>
        </div>
      </div>
      <div className="w-3/5 pt-3">
        {type === "signin" ? (
          <div></div>
        ) : (
          <LabelledInput
            label="Name"
            placeholder="John Doe"
            onChange={(e) => {
              setPostInputs((c) => ({
                ...c,
                name: e.target.value,
              }));
            }}
          />
        )}
        <LabelledInput
          label="Username"
          placeholder="johndoe123@gmail.com"
          onChange={(e) => {
            setPostInputs((c) => ({
              ...c,
              username: e.target.value,
            }));
          }}
        />
        <LabelledInput
          label="Password"
          type="password"
          placeholder="123456"
          onChange={(e) => {
            setPostInputs((c) => ({
              ...c,
              password: e.target.value,
            }));
          }}
        />
      </div>
      <button
        onClick={sendRequest}
        className="w-3/5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        {type === "signup" ? "Sign up" : "Sign in"}
      </button>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  type,
  placeholder,
  onChange,
}: LabelledInputType) {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-base font-medium text-black">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

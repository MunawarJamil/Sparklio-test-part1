import React from "react";

const LoginForm = () => {
  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-center text-2xl text-orange-600 font-bold mb-4">
        Sign In
      </h2>
      <p className="mb-4">Please enter your email and password.</p>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="keepLogin" className="flex items-center">
            <input type="checkbox" id="keepLogin" className="mr-2" />
            <span>Keep me logged in</span>
          </label>
          <p className="text-sm text-orange-600">Forgot password?</p>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Sign In
        </button>

        <p>
          Don't have an account ?
          <span className=" text-orange-600">create an account</span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

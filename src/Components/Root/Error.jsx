import React from "react";
import { useNavigate } from "react-router-dom";


const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-16 text-center max-w-md w-full">
        <div className="flex justify-center mb-4">
          
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h1>
        <p className="text-gray-600 mb-6">We couldn't find the page you're looking for. Please try again or go back to the homepage.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error;

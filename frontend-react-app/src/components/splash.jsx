import React from 'react';

const Splash = () => (
  <div className="flex justify-center items-center h-screen bg-neutral-50 flex-col">
      <h3 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">
        Authentication Template
      </h3>
      <div className="flex items-center gap-6">
        <a
          href="http://127.0.0.1:3000/signup"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300"
        >
          Sign Up
        </a>
        <a
          href="http://127.0.0.1:3000/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300"
        >
          Sign In
        </a>
      </div>
    </div>
);
export default Splash;
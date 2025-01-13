import React from 'react';
import { FaMoon, FaSun } from "react-icons/fa";

const Settings = ({ darkModeHandler, isDark }) => {

  return (
    <div className={`space-y-6`}>
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-4">
          {!isDark ? (
            <FaSun className="h-5 w-5 text-blue-600" />
          ) : (
            <FaMoon className="h-5 w-5 text-blue-600" />
          )}
          <h3 className="text-lg font-semibold">Theme</h3>
        </div>
        <div className="flex space-x-4">
          <button
            onClick = {darkModeHandler}
            className={`px-4 py-2 rounded-md ${!isDark
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
              }`}
          >
        Light
          </button>
          <button
              onClick = {darkModeHandler}
            className={`px-4 py-2 rounded-md ${ isDark
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
              }`}
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
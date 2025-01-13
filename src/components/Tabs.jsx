import React from 'react';

const Tabs = ({ activeTab, setActiveTab, isDark }) => {
  const tabOptions = ['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'];

  return (
    <div className={`text-lg text-center text-[#6F7177] ${isDark ? "dark" : ""} `}>
      <ul className="flex flex-wrap -mb-px ">
        {tabOptions.map((tab) => (
          <li className="mb-2">
            <button className={`inline-block p-5 text-center  ${(activeTab === tab) ? 'tab active text-[#1A243A]' : 'tab'
              } ${isDark ? "text-white" : ""}`} onClick={() => setActiveTab(tab)}>{tab}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;

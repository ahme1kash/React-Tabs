import React, { useState } from "react";
import "./Tabs.css";
import TabsData from "./TabsData.jsx";
const Tabs = () => {
  const [active, setActive] = useState(0);
  const handliClick = (id) => {
    setActive(id);
  };
  return (
    <div className="tabs-container">
      <ul>
        {TabsData.map((tab, idx) => {
          return (
            <li
              key={tab.title}
              className={`${active === idx ? "active" : ""}`}
              onClick={() => {
                handliClick(idx);
              }}
            >
              {tab.title}
            </li>
          );
        })}
      </ul>
      <div className="tabs-content">
        {TabsData.map((data, idx) => {
          return (
            <div
              className={`description ${active === idx ? "active" : ""}`}
              key={data.title}
            >
              {data.desc}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;

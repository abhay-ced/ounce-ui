import React from "react";
import { Link } from "react-router-dom";
import "./headerLayout.css";

const HeaderLayout = ({ children }) => {
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "medium",
  });
  return (
    <div>
      <header className="header">
        <div>
          <Link to="/form">Basic Form</Link>
        </div>
        <div>
          <Link to="/tasktwo">Taxonomy Button</Link>
        </div>
        <div>
          <Link to="/taxonomy">Taxonomy Dropdown</Link>
        </div>
        <div>
          <Link to="/select-api">SelectList From API</Link>
        </div>
        <div>
          <Link to="/badge">Taxonomy Dropdown with badge</Link>
        </div>
        <div style={{ color: "blue" }}>
          {dateFormatter.format(Date.parse(new Date()))}
        </div>
      </header>

      <div>{children}</div>
    </div>
  );
};

export default HeaderLayout;

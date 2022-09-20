import React from "react";
import { Link } from "react-router-dom";
import "./headerLayout.css";

const HeaderLayout = ({ children }) => {
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
      </header>

      <div>{children}</div>
    </div>
  );
};

export default HeaderLayout;

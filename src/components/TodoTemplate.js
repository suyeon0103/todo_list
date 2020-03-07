import React from "react";
import "./TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  const date = new Date();
  const year = date.getFullYear();
  const monthNames = ["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  return (
    <div className="TodoTemplate">
      <div className="app_header">
        <div className="date_area">
          <div className="left_col">
            <div className="day_area">{day}</div>
          </div>
          <div className="right_col">
            <div className="month_area">{month}</div>
            <div className="year_area">{year}</div>
          </div>
        </div>
        <div className="title">TODO LIST</div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;

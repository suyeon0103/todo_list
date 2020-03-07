import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from "react-icons/md";
import cn from "classnames";
import "./TodoObject.scss";

const TodoObject = ({ todo, onRemove, onCheck }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoObject">
      <div className={cn("checkbox", { checked })} onClick={() => onCheck(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoObject;

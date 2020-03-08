import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdStar,
} from "react-icons/md";
import cn from "classnames";
import "./TodoObject.scss";

const TodoObject = ({ todo, onRemove, onCheck, onImportant }) => {
  const { id, text, checked, star } = todo;

  return (
    <div className={cn("TodoObject", { star })}>
      <div className={cn("checkbox", { checked })} onClick={() => onCheck(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className={cn("important", { star })} onClick={()=> onImportant(id)}>
        <MdStar />
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoObject;

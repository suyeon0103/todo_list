import React, { useState, useCallback } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import "./TodoAdd.scss";

const TodoAdd = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []); // 컴포넌트가 렌더링될 때 단 한번만 함수 생성

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      onAdd(value);
      setValue(""); // 입력창 값 비우기
    },
    [onAdd, value]
  );

  return (
    <form className="TodoAdd" onSubmit={onSubmit}>
      <input
        placeholder="추가할 할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAddCircleOutline />
      </button>
    </form>
  );
};

export default TodoAdd;

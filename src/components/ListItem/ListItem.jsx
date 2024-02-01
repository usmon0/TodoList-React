import { useState } from "react";

export const ListItem = ({ text, funcDel, id, toggle, isComplate, redo }) => {
  const [isEdit, setIsedit] = useState(false);
  const [value, setValue] = useState(text);

  return (
    <li className="todo">
      <input
        checked={isComplate}
        onChange={() => toggle(id)}
        type="checkbox"
        name=""
        id=""
      />
      {isEdit ? (
        <input
          onInput={(e) => setValue(e.target.value)}
          id="redo__input"
          type="text"
          value={value}
        />
      ) : (
        <p>{text}</p>
      )}
      <button onClick={() => funcDel(id)} className="del__todo">
        ❌
      </button>
      <button
        onClick={(e) => {
          setIsedit(isEdit == true ? false : true);
          if (isEdit) {
            return redo(id, value);
          }
        }}
        className="red__todo"
      >
        {isEdit ? "✅" : "✏️"}
      </button>
    </li>
  );
};

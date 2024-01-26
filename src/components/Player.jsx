import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isName, setIsName] = useState(name);
  const [isEdit, setIsEdit] = useState(false);

  function handelEditClick() {
    setIsEdit((prev) => !prev);
    if (isEdit) {
      onChangeName(symbol, isName);
    }
  }

  function handelChange(event) {
    setIsName(event.target.value);
  }

  let playerName = <span className="player-name"> {isName} </span>;

  if (isEdit) {
    playerName = (
      <input type="text" required value={isName} onChange={handelChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handelEditClick}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}

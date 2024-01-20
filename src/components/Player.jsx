import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEdit, setIsEdit] = useState(false);

  function handelEditClick() {
    setIsEdit(true);
  }

  let playerName = <span className="player-name"> {name} </span>;

  if (isEdit) {
    playerName = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handelEditClick}>Edit</button>
    </li>
  );
}

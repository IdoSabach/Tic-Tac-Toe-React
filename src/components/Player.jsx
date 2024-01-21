import { useState } from "react";


export default function Player({ name, symbol, isActive }) {
  const [isName , setIsName] = useState(name)
  const [isEdit, setIsEdit] = useState(false);

  function handelEditClick() {
    setIsEdit((prev) => !prev);
  }

  function handelChange(event){
    setIsName(event.target.value)
  }

  let playerName = <span className="player-name"> {isName} </span>;
  // let btn = "Edit";

  if (isEdit) {
    playerName = <input type="text" required value={isName} onChange={handelChange} />;
    // btn = "Save";
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handelEditClick}>{isEdit ? 'Save' : 'Edit'}</button>
      
    </li>
    
  );
}

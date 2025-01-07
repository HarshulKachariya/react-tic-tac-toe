import { useState } from "react";

const Player = ({name, symbol}) =>{
    const [isEditing, setIsEditing] = useState(false);
    const clickHandler = () =>{
        setIsEditing(!isEditing)
    }
    let playerName = <span className='player-name'>{name}</span>;
    if(isEditing){
        playerName = <input type="text" required placeholder="Name" value={name}/>
    }
    return(
        <li>
            <span className='player'>
                <span className='player-name'>{playerName}</span>
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}
export default Player;
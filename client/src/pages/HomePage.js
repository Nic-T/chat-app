import React, { useState } from 'react';
import { Link } from "react-router-dom";
function HomePage () {

    const [roomName, setRoomName] = useState("");

    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    }

    return(

        <div className ="home-container">
            <input 
                type="text"
                placeholder="Room"
                value={roomName}
                onChange={handleRoomNameChange}
                className="text-input-field"
            />
            <Link to={ `/${roomName}`} className="enter-room-button" >
                Join room
            </Link>
        </div>

    );


};

export default HomePage;
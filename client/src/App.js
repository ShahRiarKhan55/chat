// Importing the CSS file for styling
import "./App.css";
// Importing the socket.io-client library for handling WebSocket connections
import io from "socket.io-client";
// Importing the useState hook from React for managing state in functional components
import { useState } from "react";
// Importing the Chat component from the "./Chat" file
import Chat from "./Chat";

// Creating a WebSocket connection to the server (Assuming the server is running on http://localhost:3001)
const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="App">
      {!showChat ? (
        // Rendering the join chat container if showChat is false
        <div className="joinChatContainer">
          <h3>Join Chat</h3>
          {/* Input for entering the username */}
          <input
            type="text"
            placeholder="Adib..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          {/* Input for entering the room ID */}
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          {/* Button to trigger the joinRoom function */}
          <button onClick={joinRoom}> Join A Room</button>
        </div>
      ) : (
        // Rendering the Chat component if showChat is true
        <Chat socket={socket} username={username} room={room}></Chat>
      )}
    </div>
  );
}

export default App;

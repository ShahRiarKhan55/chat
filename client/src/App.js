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
  return <div className="App"></div>;
}

export default App;

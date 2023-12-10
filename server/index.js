// Importing required modules
const express = require("express"); // Express is a web framework for Node.js
const app = express(); // Creating an Express application
const http = require("http"); // HTTP module for creating an HTTP server
const cors = require("cors"); // CORS middleware for handling Cross-Origin Resource Sharing
const { Server } = require("socket.io"); // Importing the Server class from socket.io

// Adding CORS middleware to the Express app
app.use(cors());

// Creating an HTTP server using the Express app
const server = http.createServer(app);

// Creating a new instance of the Socket.IO server and configuring CORS
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
// Handling socket connections
io.on("connection", (socket) => {
  // Logging when a user connects
  console.log(`User Connected: ${socket.id}`);

  // Handling disconnection
  socket.on("disconnect", () => {
    // Logging when a user disconnects
    console.log("User Disconnected", socket.id);
  });
});

// Starting the server on port 3001 and logging a message when it starts
server.listen(3001, () => {
  console.log("Server Started");
});

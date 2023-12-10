// Importing necessary React components and hooks
import React, { useEffect, useState } from "react";
// Importing the ScrollToBottom component for automatically scrolling to the bottom of a container
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  // State variables for managing the current message and the list of messages
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  // Function to send a message
  const sendMessage = async () => {
    // Checking if the current message is not empty
    if (currentMessage !== "") {
      // Creating a message data object with room, author, message, and time
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      // Emitting a "send_message"  event to the server with the message data
      await socket.emit("send_message", messageData);
      // Updating the message list with the new message
      setMessageList((list) => [...list, messageData]);
      // Clearing the current message input
      setCurrentMessage("");
    }
  };

  // Effect hook to handle receiving messages from the server
  useEffect(() => {
    socket.on("receive_message", (data) => {
      // Updating the message list with the received message data
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
}

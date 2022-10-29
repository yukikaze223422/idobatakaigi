import React from "react";
import MessageInputField from "./MessageInputFileld";
import MessageList from "./MessageList";

const Main = ({ name }) => {
  return (
    <div
      style={{
        display: "grid",
        height: "100vh",
        gridTemplateRows: "1fr auto",
      }}
    >
      <MessageList />
      <MessageInputField name={name} />
    </div>
  );
};

export default Main;

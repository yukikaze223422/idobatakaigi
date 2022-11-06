import React from "react";
import { db } from "../firebase";
import { set, ref, push } from "firebase/database";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const MessageSubmitButton = ({ name, setText, text }) => {
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        const dbref = ref(db, "messages");
        const newPostRef = push(dbref);
        set(newPostRef, {
          name: "はむさん",
          text,
        });
        setText("");
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;

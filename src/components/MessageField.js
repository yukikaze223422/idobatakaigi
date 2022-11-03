import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { set } from "firebase/database";
import { messageRef } from "../firebase";

const MessageField = ({ name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);
  console.log({ text });

  return (
    <TextField
      fullWidth={true}
      onChange={(e) => {
        setText(e.target.value);
      }}
      variant="standard"
      onKeyDown={(e) => {
        if (isComposed) return;

        const text = e.target.value;
        if (text === "") return;

        if (e.key === "Enter") {
          /*           set(ref(db, "message"), {
            text: "はむさん",
            name,
          }); */
          set(messageRef, {
            name: "はむさん",
            text,
          });
          setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => {
        setIsComposed(true);
      }}
      onCompositionEnd={() => {
        setIsComposed(false);
      }}
      value={text}
    />
  );
};

export default MessageField;

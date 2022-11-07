import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { db } from "../firebase";
import { set, ref, push } from "firebase/database";

const MessageField = ({ inputEl, name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);
  console.log({ text });

  return (
    <TextField
      autoFocus
      fullWidth={true}
      inputRef={inputEl}
      onChange={(e) => {
        setText(e.target.value);
      }}
      variant="standard"
      onKeyDown={async (e) => {
        if (isComposed) return;

        const text = e.target.value;
        if (text === "") return;

        if (e.key === "Enter") {
          const dbref = ref(db, "messages");
          const newPostRef = push(dbref);
          set(newPostRef, {
            name,
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

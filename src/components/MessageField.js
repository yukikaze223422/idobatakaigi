import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { db } from "../firebase";
import { set, ref, push } from "firebase/database";

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
      onKeyDown={async (e) => {
        if (isComposed) return;

        const text = e.target.value;
        if (text === "") return;

        if (e.key === "Enter") {
          /*           set(ref(db, "message"), {
            text: "はむさん",
            name,
          }); */
          const dbref = ref(db, "messages");
          const newPostRef = push(dbref);
          set(newPostRef, {
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

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { gravatarPath } from "../gravatar";
import MessageField from "./MessageField";

const MessageInputField = ({ name }) => {
  const [text, setText] = useState("");
  const avatarPath = gravatarPath("takagi09245@gmail.com");
  return (
    <div style={{ gridRow: 2, margin: "26px" }}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={10}>
          <MessageField name={name} setText={setText} text={text} />
        </Grid>
        <Grid item xs={1}>
          ボタン
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;

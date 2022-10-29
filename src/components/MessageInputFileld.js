import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { gravatarPath } from "../gravatar";

const MessageInputField = ({ name }) => {
  const avatarPath = gravatarPath("takagi09245@gmail.com");
  return (
    <div style={{ gridRow: 2, margin: "26px" }}>
      <Grid container>
        <Grid xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid xs={10}>入力</Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;

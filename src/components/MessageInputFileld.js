import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

const MessageInputField = () => {
  return (
    <div style={{ gridRow: 2, margin: "26px" }}>
      <Grid container>
        <Grid xs={1}>
          <Avatar />
        </Grid>
        <Grid xs={10}>入力</Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;

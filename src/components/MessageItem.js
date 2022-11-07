import React, { useEffect, useRef } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemText,
} from "@mui/material/";
import { gravatarPath } from "../gravatar";

const MessageItem = ({ isLastItem, name, text }) => {
  const ref = useRef(null);
  const avatarPath = gravatarPath(name);

  useEffect(() => {
    if (isLastItem) {
      //TODO: ここでスクロールする
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLastItem]);

  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default MessageItem;

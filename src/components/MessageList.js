import React, { useState, useEffect } from "react";
import { List } from "@mui/material/";
import {
  ref,
  onValue,
  query,
  orderByKey,
  limitToLast,
} from "firebase/database";
import { db } from "../firebase";
import MessageItem from "./MessageItem";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const dbref = ref(db, "messages");
    onValue(query(dbref, orderByKey(), limitToLast(15)), (snapshot) => {
      const messages = snapshot.val();
      if (messages === null) return;
      const entries = Object.entries(messages);
      const newMessages = entries.map((entry) => {
        const [key, nameAndText] = entry;
        return { key, ...nameAndText };
      });
      setMessages(newMessages);
    });
  }, []);
  return (
    <List style={{ gridRow: 1, overflow: "auto", width: "100%" }}>
      {messages.map(({ key, name, text }) => {
        return (
          <MessageItem key={key} name={name} text={text}>
            item
          </MessageItem>
        );
      })}
    </List>
  );
};

export default MessageList;

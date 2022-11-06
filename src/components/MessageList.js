import React, { useState, useEffect } from "react";
import {
  ref,
  onValue,
  query,
  orderByKey,
  limitToLast,
} from "firebase/database";
import { db } from "../firebase";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const dbref = ref(db, "messages");
    onValue(query(dbref, orderByKey(), limitToLast(3)), (snapshot) => {
      const messages = snapshot.val();
      const entries = Object.entries(messages);
      if (messages === null) return;
      const newMessages = entries.map((entry) => {
        const [key, nameAndText] = entry;
        return { key, ...nameAndText };
      });
      setMessages(newMessages);
    });
  }, []);
  return <div style={{ gridRow: 1 }}>MessageList</div>;
};

export default MessageList;

// import React from 'react';
import "./Chat.css"
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from "./Message";
import { selectChannelId, selectChannelName } from "../../../redux/appSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/userSlice";
import { useEffect, useState } from "react";
import db from "../../../firebase";
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";


interface Message {
  // Define the properties of a message
  // For example, a message might have a 'text' and a 'timestamp'
  text: string;
  timestamp: number;
  message: string; // Add the 'message' property here
  user: string;
  // Add other properties as needed
}


function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() =>{
    if (channelId) {
    const varcol = collection(db, "channels");
    const vardo = doc(varcol, channelId);
    const newvarcol = collection(vardo, "messages")
    const q = query(newvarcol, orderBy("timestamp", "asc"));
    onSnapshot(q, (snapshot) => 
    setMessages(
      snapshot.docs.map((doc) => 
        doc.data() as Message
      )
    ))
    }
  }, [channelId])


  const sendMessage = (e: any)=> {
    e.preventDefault();

    const mesCol = collection(db, "channels");
    const mesDo = doc(mesCol, channelId);
    const newMesCol = collection(mesDo, "messages")
    addDoc(newMesCol, {
      timestamp: serverTimestamp(),
      message: input,
      user: user,
    })

    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName}/>

      <div className="chat__messages">
        {messages.map(message => (
          <Message 
          data={{
            "data-timestamp": message.timestamp,
            "data-message": message.message,
            "data-user": message.user,
          }}
          />
        ))}
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input value={input} disabled={!channelId} onChange={e => setInput(e.target.value)}placeholder={`Message #${channelName}`} />
          <button className='chat__inputButton' type='submit' onClick={sendMessage}>
            Send message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  )
}

export default Chat


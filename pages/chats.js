import React, {useState, useEffect, useContext} from "react";

import {Context} from '../context';

import router, {useRouter} from 'next/router';

import dynamic from "next/dynamic"


const ChatEngine = dynamic(() =>
  import ("react-chat-engine").then((module)=> module.ChatEngine)

);

const MessageFormSocial = dynamic(() =>
  import ("react-chat-engine").then((module)=> module.MessageFormSocial)
)
export default function Chats() {

  const {username, secret} = useContext(Context);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });

  useEffect(() => {
    if (username.length ===0 || secret.length === 0) router.push("/");
  });


  if (!showChat) return <div />;


  return (
  <div className="background">
    <div className="shadow">
      <ChatEngine 
        height = "calc(100vh - 150px)"
        projectID = "608a4078-e705-4e2a-a016-84a1eb9518a3"
        userName = {username}
        userSecret = {secret}
        renderNewMessageForm = {() => <MessageFormSocial />}
      />
    </div>
  </div>
  )
}

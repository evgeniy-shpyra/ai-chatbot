import React from "react";
import "./chat.scss";
import Header from "./components/header/Header";
import Messages from "./components/messages/Messages";
import InputField from "./components/inputField/InputField";
import { postMessage } from "../../api/ai";
import { ChatContext } from "../../App";

const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, time);
  });

const Chat = () => {
  const chatContext = React.useContext(ChatContext);

  const handleSendMessage = async (message: string) => {
    if (!chatContext) return;
    chatContext.setData((prev) => ({
      history: [
        ...prev.history,
        { type: "person", time: String(Date.now()), text: message },
      ],
      isLoading: true,
    }));
    const response = postMessage(message);

    Promise.all([response, delay(2000)]).then((response) => {
      const date = new Date(response[0].time).toISOString();

      chatContext.setData((prev) => ({
        history: [
          ...prev.history,
          { type: "ai", time: date, text: response[0].answer },
        ],
        isLoading: false,
      }));
      console.log(chatContext.data);
    });
  };

  return (
    <div className="chat">
      <Header name="Chelick" />
      <Messages />
      <InputField handleSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;

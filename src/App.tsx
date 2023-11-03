import React from "react";
import Chat from "./screens/chat/Chat";
import "./app.scss";
import { createContext } from "react";
import { IStore } from "./types";

interface IChatContext {
  data: IStore;
  setData: React.Dispatch<React.SetStateAction<IStore>>;
}

const defaultValue: IStore = {
  history: [
    {
      time: String(Date.now()),
      text: "yoyoyoyooy",
      type: "person",
    },
    {
      time: String(Date.now()),
      text: "yoyoyoyooy",
      type: "ai",
    },
  ],
  isLoading: false,
};

export const ChatContext = createContext<IChatContext | undefined>(undefined);

function App() {
  const [data, setData] = React.useState<IStore>(defaultValue);

  return (
    <div className="app">
      <ChatContext.Provider value={{ data, setData }}>
        <Chat />
      </ChatContext.Provider>
    </div>
  );
}

export default App;

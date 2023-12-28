import React from "react";
import Chat from "./screens/chat/Chat";
import "./app.scss";
import { createContext } from "react";
import { IStore } from "./types";
import TestsAi from "./api/components/tests/TestsAi";

interface IChatContext {
  data: IStore;
  setData: React.Dispatch<React.SetStateAction<IStore>>;
}

const defaultValue: IStore = {
  history: [],
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
      <TestsAi />
    </div>
  );
}

export default App;

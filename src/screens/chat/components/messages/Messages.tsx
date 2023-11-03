import React from "react";
import "./messages.scss";
import SimpleBar from "simplebar-react";
import { ChatContext } from "../../../../App";
import "simplebar-react/dist/simplebar.min.css";
import Message from "../message/Message";
import Preloader from "../preloader/Preloader";

const Messages = () => {
  const chatContext = React.useContext(ChatContext);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!chatContext || !scrollRef.current) return;
    scrollRef.current.style.scrollBehavior = "smooth";
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [chatContext]);

  const isLoading = chatContext && chatContext.data.isLoading;
  return (
    <div
      className="chat__messages messages"
      style={isLoading ? { paddingBottom: "12px" } : {}}
    >
      <SimpleBar
        scrollableNodeProps={{ ref: scrollRef }}
        style={{
          maxHeight: 497,
          width: "100%",
        }}
        autoHide={false}
        // forceVisible="y"

        
      >
        <div className="messages__container">
          {chatContext &&
            chatContext.data.history.map((item, index) => (
              <Message
                key={index}
                type={item.type}
                time={item.time}
                text={item.text}
                isLoading={chatContext.data.isLoading}
                isLast={index === chatContext.data.history.length - 1}
              />
            ))}
          {chatContext && chatContext.data.isLoading && <Preloader />}
        </div>
      </SimpleBar>
    </div>
  );
};

export default Messages;

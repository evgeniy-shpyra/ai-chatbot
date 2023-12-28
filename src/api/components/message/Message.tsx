import React from "react";
import "./message.scss";
import cn from "classnames";
import Avatar from "../avatar/Avatar";

interface MessageProps {
  type: "person" | "ai";
  text: string;
  time: string;
  isLast: boolean;
  isLoading: boolean;
}

const Message: React.FC<MessageProps> = ({ type, text, isLast, isLoading }) => {
  const style = isLast
    ? { paddingTop: "6px", paddingBottom: isLoading ? "14px" : "20px" }
    : { paddingTop: "6px" };
  return (
    <div className="messages__message message" style={style}>
      <div
        className={cn(
          "message__container",
          { message__container_person: type === "person" },
          { message__container_ai: type === "ai" }
        )}
      >
        {type === "ai" && <Avatar color="gray" />}
        <div className="message__text">
          <span dangerouslySetInnerHTML={{ __html: text }}></span>
          {type === "ai" && (
            <div className="message__ai-label-container">
              <div className="message__ai-label">
                <span>AI</span>
                Answer
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;

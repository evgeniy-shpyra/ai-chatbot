import React from "react";
import "./inputField.scss";
import { SendIcon } from "../icons/Icons";
import { ChatContext } from "../../../../App";
import cn from "classnames";

interface InputFieldProps {
  handleSendMessage: (message: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ handleSendMessage }) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const chatContext = React.useContext(ChatContext);

  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  React.useEffect(() => {
    if (!chatContext?.data.isLoading) {
      setMessage("");
      textareaRef.current?.focus();
    }
  }, [chatContext]);

  const recalculateTextareaHeight = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setMessage(e.currentTarget.value);
  };

  React.useEffect(() => {
    recalculateTextareaHeight();
  }, [message]);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    handleSendMessage(message);
  };

  const handleWrapperClick = () => {
    textareaRef.current?.focus();
  };

  const handleTextareaClick = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleWrapperClick}
      className={cn("chat__input-field", "input-field", {
        "input-field_loading": chatContext?.data.isLoading,
      })}
    >
      <textarea
        ref={textareaRef}
        onChange={handleInput}
        onClick={handleTextareaClick}
        cols={1}
        rows={1}
        className="input-field__input"
        placeholder="Type a reply..."
        value={message}
      />
      <button onClick={handleSubmit} className="input-field__sent-button">
        <SendIcon />
      </button>
    </div>
  );
};

export default InputField;

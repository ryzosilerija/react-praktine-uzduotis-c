function Message({ text, isError }) {
  if (text === "") {
    return null;
  }

  return <p className={isError ? "message error" : "message hint"}>{text}</p>;
}

export default Message;

import { useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const SOCKET_URL = "http://localhost:8080/stomp";

const MessageTab = () => {
  const [nameSend, setNameSend] = useState("");
  const [msgRcv, setMsgRcv] = useState("");

  const client = new Client({
    webSocketFactory: () => {
      return new SockJS(SOCKET_URL);
    },
    onConnect: () => {
      client.subscribe("/topic/greetings", (payload) => {
        setMsgRcv(JSON.parse(payload.body).content);
      });
    },
  });

  client.activate();

  const inputChangeHandler = (event) => {
    setNameSend(event.target.value);
  };

  const buttonClickHandler = () => {
    client.publish({
      destination: "/app/hello",
      body: JSON.stringify({ name: nameSend }),
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Your name"
        value={nameSend}
        onChange={inputChangeHandler}
      />
      <button onClick={buttonClickHandler}>Send</button>
      {msgRcv !== "" && <p>Respuesta: {msgRcv}</p>}
    </div>
  );
};

export default MessageTab;

import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import "./App.css";
import { ChannelListContainer, ChannelContainer } from "./components";

const apiKey = "ykcx4gn7926r";

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="theme light">
        <ChannelListContainer></ChannelListContainer>
        <ChannelContainer></ChannelContainer>
      </Chat>
      {/* "https://www.youtube.com/watch?v=MJzbJQLGehs&t=13s&ab_channel=JavaScriptMastery" 50:00 */}
    </div>
  );
};

export default App;

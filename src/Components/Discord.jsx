import styled from "styled-components";
import Channels from "./Channels";
import Friends from "./Friends";
import DiscordHeader from "./DiscordHeader";
import Chat from "./Chat";
import ChatInfo from "./ChatInfo";
import { UserProvider } from "./UserContext";

const DiscordWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Discord = () => {
  return (
    <UserProvider>
      <DiscordWrapper>
        <DiscordHeader />
        <ContentWrapper>
          <Channels />
          <Friends />
          <Chat />
          <ChatInfo />
        </ContentWrapper>
      </DiscordWrapper>
    </UserProvider>
  );
}

export default Discord;

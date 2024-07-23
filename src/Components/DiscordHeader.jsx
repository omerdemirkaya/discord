import styled from "styled-components";

const DiscordHeaderWrapper = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: #595A5E;
  color: white;
`;

const DiscordHeaderItemWrapper = styled.div`
display:flex;
`;

const DiscordHeaderItem = styled.div`
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const DiscordHeaderToolBar = styled.div`
  display: flex;
  align-items: center;
`;

const DiscordHeaderToolBarItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const DiscordHeader = () => {
  return (
    <DiscordHeaderWrapper>
      <DiscordHeaderItemWrapper>
        <DiscordHeaderItem>Arkadaşlar</DiscordHeaderItem>
        <DiscordHeaderItem>Çevrimiçi</DiscordHeaderItem>
        <DiscordHeaderItem>Tümü</DiscordHeaderItem>
        <DiscordHeaderItem>Bekleyen</DiscordHeaderItem>
        <DiscordHeaderItem>Engellenen</DiscordHeaderItem>
        <DiscordHeaderItem>Arkadaş Ekle</DiscordHeaderItem>
    </DiscordHeaderItemWrapper>
      <DiscordHeaderToolBar>
        <DiscordHeaderToolBarItem>Group dm</DiscordHeaderToolBarItem>
        <DiscordHeaderToolBarItem>Gelen kutusu</DiscordHeaderToolBarItem>
        <DiscordHeaderToolBarItem>Yardım</DiscordHeaderToolBarItem>
      </DiscordHeaderToolBar>
    </DiscordHeaderWrapper>
  );
}

export default DiscordHeader;

import styled from "styled-components";
import { useUser } from './UserContext';

const ChatInfoWrapper = styled.div`
  width: 20%;
  height: calc(95vh); /* Header yüksekliğini çıkararak ayarlarız */
  background-color: #313338;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  color: white;
`;

const UserAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #575757;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const UserInfo = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const UserDetail = styled.div`
  width: 100%;
  background-color: #40444b;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: left;
`;

const ChatInfo = () => {
  const { selectedUser } = useUser();

  return (
    <ChatInfoWrapper>
      {selectedUser ? (
        <>
          <UserAvatar>{selectedUser.charAt(0)}</UserAvatar>
          <UserInfo>{selectedUser}</UserInfo>
          <UserDetail>Ortak Sunucu Bilgisi</UserDetail>
          <UserDetail>Ortak Arkadaş Bilgisi</UserDetail>
        </>
      ) : (
        <UserInfo>Bir kullanıcı seçin</UserInfo>
      )}
    </ChatInfoWrapper>
  );
};

export default ChatInfo;

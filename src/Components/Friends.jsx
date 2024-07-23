import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useUser } from './UserContext';

const FriendsWrapper = styled.div`
  width: 10%;
  height: calc(100vh - 5vh);
  overflow-y: auto;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #2b2d31;
  overflow-x: hidden;
`;

const FriendsWrapperItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 8vh;
  border-bottom: 1px solid black;
  justify-content: center;
  margin-left: 3px;

  &:nth-child(4) {
    height: 4vh;
  }
`;

const FriendsWrapperItemIcon = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const FriendsWrapperItemText = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 10px;
`;

const Friends = () => {
  const { setSelectedUser } = useUser();

  const handleItemClick = (userName) => {
    setSelectedUser(userName);
  };

  return (
    <FriendsWrapper>
      <FriendsWrapperItem onClick={() => handleItemClick('Arkadaşlar')}>
        <FriendsWrapperItemIcon>
          <FontAwesomeIcon icon={faUser} />
        </FriendsWrapperItemIcon>
        <FriendsWrapperItemText>Arkadaşlar</FriendsWrapperItemText>
      </FriendsWrapperItem>
      <FriendsWrapperItem onClick={() => handleItemClick('Nitro')}>
        <FriendsWrapperItemIcon>
          <FontAwesomeIcon icon={faUser} />
        </FriendsWrapperItemIcon>
        <FriendsWrapperItemText>Nitro</FriendsWrapperItemText>
      </FriendsWrapperItem>
      <FriendsWrapperItem onClick={() => handleItemClick('Mağaza')}>
        <FriendsWrapperItemIcon>
          <FontAwesomeIcon icon={faUser} />
        </FriendsWrapperItemIcon>
        <FriendsWrapperItemText>Mağaza</FriendsWrapperItemText>
      </FriendsWrapperItem>
      <FriendsWrapperItem onClick={() => handleItemClick('Direkt Mesajlar')}>
        <FriendsWrapperItemIcon>
          <FontAwesomeIcon icon={faUser} />
        </FriendsWrapperItemIcon>
        <FriendsWrapperItemText>Direkt Mesajlar +</FriendsWrapperItemText>
      </FriendsWrapperItem>
      <FriendsWrapperItem onClick={() => handleItemClick('Ayşe')}>
        <FriendsWrapperItemIcon>
          <FontAwesomeIcon icon={faUser} />
        </FriendsWrapperItemIcon>
        <FriendsWrapperItemText>Ayşe</FriendsWrapperItemText>
      </FriendsWrapperItem>
      <FriendsWrapperItem onClick={() => handleItemClick('Doğa')}>
        <FriendsWrapperItemIcon>
          <FontAwesomeIcon icon={faUser} />
        </FriendsWrapperItemIcon>
        <FriendsWrapperItemText>Doğa</FriendsWrapperItemText>
      </FriendsWrapperItem>
      <FriendsWrapperItem onClick={() => handleItemClick('Burcu')}>
        <FriendsWrapperItemIcon>
          <FontAwesomeIcon icon={faUser} />
        </FriendsWrapperItemIcon>
        <FriendsWrapperItemText>Burcu</FriendsWrapperItemText>
      </FriendsWrapperItem>
      <FriendsWrapperItem onClick={() => handleItemClick('İpek')}>
        <FriendsWrapperItemIcon>
          <FontAwesomeIcon icon={faUser} />
        </FriendsWrapperItemIcon>
        <FriendsWrapperItemText>İpek</FriendsWrapperItemText>
      </FriendsWrapperItem>
    </FriendsWrapper>
  );
};

export default Friends;

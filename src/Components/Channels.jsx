import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faUser } from '@fortawesome/free-solid-svg-icons'; // Doğru ikon içe aktarma

const LeftBarWrapper = styled.div`
  width: 5%;
  height: calc(100vh - 5vh); /* Header yüksekliğini çıkararak ayarlarız */
  overflow-y: auto;
  display: flex;
  background-color: #1e1f22;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-right: 1px solid black;
  overflow-x:hidden;
`;
const LeftBarItemWrapper = styled.div`
  width:100%;
  display:flex;
  height:8vh;
  flex-direction:column;
  border:1px solid black;
  justify-content:center;
`;

const Channels = () => {
  return (
    <LeftBarWrapper>
        <LeftBarItemWrapper><FontAwesomeIcon icon={faMessage} size="2x" /></LeftBarItemWrapper>
        <LeftBarItemWrapper><FontAwesomeIcon icon={faUser} size="2x"/></LeftBarItemWrapper>
        <LeftBarItemWrapper><FontAwesomeIcon icon={faUser} size="2x"/></LeftBarItemWrapper>
        <LeftBarItemWrapper><FontAwesomeIcon icon={faUser} size="2x"/></LeftBarItemWrapper>
        <LeftBarItemWrapper><FontAwesomeIcon icon={faUser} size="2x"/></LeftBarItemWrapper>
    </LeftBarWrapper>
  );
}

export default Channels;

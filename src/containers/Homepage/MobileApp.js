import styled from "styled-components";
import MobileAppImage from "../../static/images/mobileapp.png";
import AppStore from "../../static/images/appstore.svg";
import PlayStore from "../../static/images/playstore.svg";

const MobileAppDiv = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};

  background-color: ${({ theme }) => theme.background};
  width: 100%;
  height: 50vh;
  padding: 2rem;

  @media only screen and (max-width: 700px) {
    height: 90vh;
  }
`;

const Box = styled.div`
  ${({ theme }) => theme.mixins.flexAround};

  background-color: ${({ theme }) => theme.color};
  width: 70%;
  height: 100%;
  border-radius: 20px;

  @media only screen and (max-width: 700px) {
    ${({ theme }) => theme.mixins.flexColumn};
    width: 90%;
  }
`;

const CTA = styled.div`
  ${({ theme }) => theme.mixins.flexColAround};
  width: 90%;
  color: white;
  margin-left: 5rem;
  align-items: flex-start;

  @media only screen and (max-width: 700px) {
    margin-top:4rem;
    margin-left:0;
  }
`;

const Image = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 50%;
  height: 100%;

  @media only screen and (max-width:700px){
    align-items:flex-start;
    width:40%;
    height:70%;
    margin-top:2rem;
  }
`;

const DownloadLinks = styled.div`
  ${({ theme }) => theme.mixins.flexRow};
`;

const MobileApp = () => {
  return (
    <MobileAppDiv>
      <Box>
        <CTA>
          <h1>Download SIPKart on mobile for the best investing experience</h1>
          <DownloadLinks>
            <img src={AppStore} alt="App store" />
            <img src={PlayStore} alt="Play store" />
          </DownloadLinks>
        </CTA>
        <Image>
          <img src={MobileAppImage} alt="Mobile app" height="80%" />
        </Image>
      </Box>
    </MobileAppDiv>
  );
};

export default MobileApp;

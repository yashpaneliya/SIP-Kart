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
`;

const Box = styled.div`
  ${({ theme }) => theme.mixins.flexAround};

  background-color: ${({ theme }) => theme.color};
  width: 70%;
  height: 100%;
  border-radius: 20px;
`;

const CTA = styled.div`
  ${({ theme }) => theme.mixins.flexColAround};
  width: 50%;
  color: white;
  margin-left: 5rem;
  align-items:flex-start;
`;

const Image = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 50%;
  height: 100%;
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

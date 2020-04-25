import React from 'react';
import profileImageSrc from '../assests/profile.jpg';
import checkYourAreaSrc from '../assests/checkYourArea.png';
import preventCovid from '../assests/preventCovid.png';
import FaceSmileCustomIcon from '../customIcons/FaceSmileCustomIcon';
import FaceSadCustomIcon from '../customIcons/FaceSadCustomIcon';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeWrapper = styled.div`
  background: rgba(47, 123, 255, 0.79);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const HomeStatusWrapper = styled.div`
  min-height: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0 24px;
`;

const HomeStatusContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const ButtonGood = styled.div`
  width: 102px;
  height: 48px;
  background: white;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  color: #34c082;
  align-items: center;
`;

const ButtonBad = styled.div`
  margin-left: 16px;
  width: 102px;
  height: 48px;
  background: white;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  color: #de351b;
  align-items: center;
`;

const ButtonTextWrapper = styled.span`
  margin-left: 8px;
`;

const HomeStatusImageWrapper = styled.img`
  width: 45px;
  height: 45px;
  border: 4px solid white;
  border-radius: 50%;
  margin-bottom: 25px;
`;

const CheckYourAreaImageWrapper = styled.img`
  width: 100%;
  padding-top: 10px;
`;

const PreventCovidImageWrapper = styled.img`
  width: 100%;
`;

const HomeStatusTextWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HelloWrapper = styled.p`
  font-size: 24px;
  margin: 3px 0;
  font-weight: bold;
`;
const HealthCheckTextWrapper = styled.p`
  font-size: 14px;
  margin: 10px 0 0 0;
`;

const HomeFooterWrapper = styled.div`
  background: #f9fcff;
  padding: 0 24px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HomeStatusWrapper>
        <HomeStatusContentWrapper>
          <HomeStatusTextWrapper>
            <HelloWrapper>Hello Ruben!</HelloWrapper>
            <HealthCheckTextWrapper>
              How is you health at the moment?
            </HealthCheckTextWrapper>
          </HomeStatusTextWrapper>
          <HomeStatusImageWrapper src={profileImageSrc} />
        </HomeStatusContentWrapper>

        <ButtonWrapper>
          <ButtonGood>
            <FaceSmileCustomIcon />
            <ButtonTextWrapper>GOOD</ButtonTextWrapper>
          </ButtonGood>

          <Link to="/diagnose">
            <ButtonBad>
              <FaceSadCustomIcon />
              <ButtonTextWrapper>Bad</ButtonTextWrapper>
            </ButtonBad>
          </Link>
        </ButtonWrapper>
      </HomeStatusWrapper>

      <HomeFooterWrapper>
        <Link to="/map">
          <CheckYourAreaImageWrapper src={checkYourAreaSrc} />
        </Link>
        <Link to="/diagnose">
          <PreventCovidImageWrapper src={preventCovid} />
        </Link>
      </HomeFooterWrapper>
    </HomeWrapper>
  );
};

export default Home;

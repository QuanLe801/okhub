import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { styled } from 'styled-components';

const ColTextStyled = styled(Col)`
  padding-left: 70px;
  padding-right: 50px;
  font-style: normal;
  /* text-transform: uppercase; */
  margin-top: 297px;
  @media screen and (max-width: 576px) {
    margin-top: 113px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const RowStyled = styled(Row)`
  background: url('/background-aboutus.svg') no-repeat left -68%;
`;

const TextGreenStyled = styled.span`
  font-family: 'Averta Std CY Bold';
  font-size: 46px;
  font-weight: 800;
  letter-spacing: -2.3px;
  color: #4ca757;
  @media screen and (max-width: 576px) {
    font-size: 25px;
    letter-spacing: -1.25px;
  }
`;
const TextBlueStyled = styled(TextGreenStyled)`
  color: #3a5469;
`;

const TextTitleStyled = styled.span`
  font-family: Averta Std CY;
  color: #376a66;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2.16px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    letter-spacing: -1.25px;
  }
`;

const ButtonMoreStyled = styled.button`
  margin-top: 30px;
  width: 143px;
  height: 143px;
  border-radius: 50%;
  background-image: linear-gradient(180deg, #4ca757, #16a571);
  border: none;
  font-family: Averta Std CY;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  text-transform: uppercase;
  color: #fff;
  &:hover {
    background-image: linear-gradient(180deg, #2c5f32, #13895e);
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 16px;
  }
  @media screen and (max-width: 576px) {
    width: 85px;
    height: 85px;
    font-size: 12px;
  }
`;

const ColImageStyled = styled(Col)`
  padding-top: 163px;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    padding-top: 0px;
  }
`;

const ImageStyled = styled(Image)`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1200px) {
    padding: 0px 70px;
  }
  @media screen and (max-width: 576px) {
    padding: 0px 12px;
  }
`;

const MarqueeStyled = styled(Marquee)`
  padding: 0px 50px;
  font-size: 100px;
  font-style: normal;
  font-weight: bold;
  line-height: 150px;
  text-transform: uppercase;
  background: inherit;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #4ca757;
  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
  @media screen and (max-width: 576px) {
    font-size: 40px;
  }
`;

const MarqueeGreenStyled = styled.span`
  -webkit-text-fill-color: #16a571;
  margin: 0px 20px;
  @media screen and (max-width: 576px) {
    margin: 0px 10px;
  }
`;

function AboutUsContainer() {
  return (
    <div>
      <RowStyled className="w-100 m-0">
        <ColTextStyled xl={5}>
          <TextTitleStyled className="d-block mb-3" data-aos="fade-up">
            About us
          </TextTitleStyled>
          <TextGreenStyled data-aos="fade-up">
            Offshore Energy Installation
          </TextGreenStyled>
          <br />
          <TextBlueStyled>
            OEI is your gateway to renewable energy and
          </TextBlueStyled>
          <TextGreenStyled> Oil </TextGreenStyled>{' '}
          <TextBlueStyled> & </TextBlueStyled>{' '}
          <TextGreenStyled> Gas </TextGreenStyled>
          <TextBlueStyled>solutions.</TextBlueStyled>
          <ButtonMoreStyled className="d-block" data-aos="fade-up">
            See More
          </ButtonMoreStyled>
        </ColTextStyled>
        <ColImageStyled xl={7} data-aos="fade-right">
          <ImageStyled
            src={'/about-us-image.svg'}
            alt=""
            width={960}
            height={825}
          />
        </ColImageStyled>
      </RowStyled>
      <Row className="mw-100 m-0">
        <MarqueeStyled speed={100}>
          <span>offshore</span>
          <MarqueeGreenStyled> Energy </MarqueeGreenStyled>
          <span style={{ paddingRight: '20px' }}>installation</span>
        </MarqueeStyled>
      </Row>
    </div>
  );
}

export default AboutUsContainer;

import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { styled } from 'styled-components';

const FooterWrapper = styled.div`
  background: url('/footerBg.svg');
  padding: 105px 70px 50px 70px;
  background-size: auto 100%;
  background-repeat: repeat-x;
  object-fit: cover;
  @media screen and (max-width: 576px) {
    padding: 35px 10px 58px 10px;
  }
`;

const DescriptionLogoStyled = styled.div`
  color: #fff;
  font-family: Averta Std CY;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 45px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
    font-weight: 800;
    font-family: Averta Std CY Bold;
  }
`;

const ColNavStyled = styled(Col)`
  color: white;
  font-family: Averta Std CY;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const TextNavStyled = styled.div`
  margin-bottom: 13px;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    font-weight: 400;
    font-family: Averta Std CY Regular;
  }
`;

const TextDescriptionSignUp = styled.div`
  font-size: 14px;
  font-family: Averta Std CY Regular;
  font-weight: 500;
  line-height: 18px;
  text-transform: none;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    font-weight: 100;
    margin-top: 8px;
  }
`;

const ImageStyled = styled(Image)`
  opacity: 0.5;
`;

const ImageWrapper = styled.div`
  margin-top: 30px;
  @media screen and (max-width: 576px) {
    margin-top: 24px;
  }
`;

const InputStyled = styled.input`
  margin-top: 24px;
  padding-bottom: 8px;
  color: rgba(255, 255, 255, 1);
  font-family: Averta Std CY Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 100%;
  border: 0;
  background-color: inherit;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2) !important;
  &:focus {
    border: 0;
    outline: 0;
  }
  &::placeholder {
    font-family: Averta Std CY;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const InputWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 30px;
  background: url('/arrowDiagonal.svg');
  width: 12px;
  height: 12px;
`;

const ColTitleNavStyled = styled(Col)`
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
    width: 50%;
  }
`;

const SeparatorStyled = styled.hr`
  height: 1px;
  color: rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.2);
`;

const TextNavContactStyled = styled.div`
  color: #fff;
  font-family: Averta Std CY;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const TextNavInfoStyled = styled(TextNavContactStyled)`
  font-weight: 100px;
  font-size: 16px;
  color: #ffffffb6;
`;

function Footer() {
  const logoContact = [
    '/fb.svg',
    '/youtube.svg',
    '/zalo.svg',
    '/instagram.svg',
    '/tiktok.svg',
  ];
  return (
    <FooterWrapper>
      <Row className="m-0 p-0">
        <Col lg={4} className="mb-sm-5 p-0">
          <Image
            src={'/logo.svg'}
            alt=""
            width={191}
            height={126}
            className="ms-sm-5"
          />
          <DescriptionLogoStyled>
            Offshore Energy Installation JSC
          </DescriptionLogoStyled>
        </Col>
        <ColNavStyled lg={8} className="p-0">
          <Row className="m-0 p-0">
            <ColTitleNavStyled xl={5} sm={7} className="mb-sm-4 p-0">
              <TextNavStyled>About</TextNavStyled>
              <TextNavStyled>Projects</TextNavStyled>
              <TextNavStyled>Clients & partners</TextNavStyled>
              <TextNavStyled>News and event</TextNavStyled>
              <TextNavStyled>sustainability</TextNavStyled>
              <TextNavStyled>download profile company</TextNavStyled>
            </ColTitleNavStyled>
            <ColTitleNavStyled xl={3} sm={5} className="mb-sm-4 p-0">
              <TextNavStyled>Careers</TextNavStyled>
              <TextNavStyled>Contact</TextNavStyled>
              <TextNavStyled>Blog</TextNavStyled>
              <TextNavStyled>FAQ</TextNavStyled>
              <TextNavStyled>Disclaimer</TextNavStyled>
              <TextNavStyled>privacy policy</TextNavStyled>
            </ColTitleNavStyled>
            <Col xl={4} sm={12} className="p-0">
              <TextNavStyled>
                Sign up for email to receive the latest information
              </TextNavStyled>
              <TextDescriptionSignUp>
                Lorem ipsum dolor sit amet consectetur. Aliquam sed blandit
                rhoncus id dictum.
              </TextDescriptionSignUp>
              <div className="position-relative">
                <InputStyled placeholder="Your email" />
                <InputWrapper></InputWrapper>
              </div>
              <ImageWrapper className="d-flex">
                {logoContact.map((item, key) => (
                  <ImageStyled
                    key={key}
                    src={item}
                    alt=""
                    width={20}
                    height={20}
                    className="me-4"
                  />
                ))}
              </ImageWrapper>
            </Col>
          </Row>
        </ColNavStyled>
      </Row>
      <SeparatorStyled />
      <Row className="m-0 p-0">
        <Col lg={4} className="p-0">
          <TextNavContactStyled>ADDRESS</TextNavContactStyled>
        </Col>
        <Col lg={8} className="p-0">
          <TextNavInfoStyled>
            2nd floor, No.44, 30/4 Rd., Ward 9, Vung Tau City, Vietnam
          </TextNavInfoStyled>
        </Col>
      </Row>
      <SeparatorStyled />
      <Row className="m-0 p-0">
        <Col sm={4} className="p-0">
          <TextNavContactStyled className="align-middle">
            CONTACT
          </TextNavContactStyled>
        </Col>
        <Col sm={8} className="p-0">
          <Row className="m-0 d-flex align-items-center">
            <Col lg={5} md={5} className="p-0">
              <TextNavInfoStyled>(+84) 254 6295268</TextNavInfoStyled>
            </Col>
            <Col lg={7} md={7} className="p-0">
              <TextNavInfoStyled>info@oei.com.vn</TextNavInfoStyled>
            </Col>
          </Row>
        </Col>
      </Row>
    </FooterWrapper>
  );
}

export default Footer;

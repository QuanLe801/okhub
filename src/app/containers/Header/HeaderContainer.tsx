import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import Image from 'next/image';
import { styled } from 'styled-components';
import NavItem from '@/app/components/NavItem/NavItem';

import {
  Button,
  Carousel,
  Col,
  Nav,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
} from 'react-bootstrap';

const HeaderStyled = styled.div`
  position: relative;
  background-color: #a3abac;
`;
const HeaderLogoStyled = styled.div`
  padding: 12px 70px 0px 70px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    padding-bottom: 11px;
  }
  @media screen and (max-width: 576px) {
    padding: 10px 8px 10px 8px;
  }
`;
const ContactStyled = styled.p<{ $textBlack: boolean }>`
  border-radius: 20px;
  border: 1px solid
    ${(props) => (props.$textBlack ? 'hsla(0, 0%, 100%, 0.25)' : '#000000')};
  padding: 7.5px 33px;
  color: ${(props) => (props.$textBlack ? '#fff' : '#000000')};
  text-align: center;
  font-family: 'Averta Std CY';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
`;

const HeaderNavStyled = styled(Row)`
  padding: 12px 70px 0px 70px;
  margin-top: 11px;
  padding-bottom: 45px;
  @media screen and (max-width: 992px) {
    display: block;
    padding: 16px;
  }
`;

const ColStyled = styled(Col)`
  max-width: 14.27%;
  height: 34px;
  @media screen and (max-width: 992px) {
    max-width: 100%;
    padding: 0;
    height: 47px;
  }
`;

const ColSubNavStyled = styled(ColStyled)`
  position: relative;
  &:hover .subnavContent {
    display: block;
  }
`;

const ImageStyled = styled(Image)`
  position: absolute;
  right: 13px;
  top: 22px;
`;

const CarouselStyled = styled(Carousel)`
  &::after {
    content: '';
    border-bottom: 3px solid green;
    width: 1px;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: -2px;

    animation: sliderRun 16000ms linear 1.4s infinite;
    @keyframes sliderRun {
      0% {
        width: 15%;
      }
      33.3% {
        width: 45%;
      }
      66.6% {
        width: 80%;
      }
      100% {
        width: 100%;
      }
    }
  }
  position: relative;
  .carousel-indicators {
    z-index: 1;
  }
  .carousel-indicators [data-bs-target] {
    opacity: 1;
    border: 3px solid white;
  }
  .carousel-indicators .active {
    transform: scale(1.3);
    transition: all 300ms;
  }
  .carousel-indicators button:first-child.active {
    background-image: url('/indicatorImg1.svg');
    transition: opacity 300ms ease-in;
  }
  .carousel-indicators button:nth-child(2).active {
    background-image: url('/indicatorImg2.svg');
    transition: opacity 300ms ease-in;
  }
  .carousel-indicators button:nth-child(3).active {
    background-image: url('/indicatorImg3.svg');
    transition: opacity 300ms ease-in;
  }

  button {
    position: absolute;
    width: 104px !important;
    height: 104px !important;
    border-radius: 50%;
    margin-top: -40px;

    &:nth-child(1) {
      background-image: url('/background-logo1.svg');
      background-size: cover;
      margin-right: 90%;
    }
    &:nth-child(2) {
      background-image: url('/background-logo2.svg');
      background-size: cover;
    }
    &:nth-child(3) {
      background-image: url('/background-logo3.svg');
      background-size: cover;
      margin-right: -90%;
    }
    @media screen and (max-width: 768px) {
      width: 60px !important;
      height: 60px !important;
      margin-top: -25px;
    }
  }
`;

const CarouselItemStyled = styled(Carousel.Item)<{ $Img: string }>`
  /* background-repeat: no-repeat !important; */
  background-size: auto !important;
  height: 762px;
  object-fit: cover;
  background: url(${(props) => props.$Img});
  @media screen and (max-width: 768px) {
    height: 521px;
  }
`;

const CarouselTitleStyled = styled.span`
  font-size: 115px;
  font-style: normal;
  font-weight: bold;
  line-height: 130px;
  letter-spacing: -2.54px;
  background: inherit;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #fff;
  @media screen and (max-width: 900px) {
    font-size: 80px;
    line-height: 60px;
  }
  @media screen and (max-width: 650px) {
    font-size: 42px;
    line-height: 50px;
  }
`;

const CarouselDescriptionStyled = styled.div`
  color: #f9f0ecba;
  font-family: Averta Std CY;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin-top: 280px;
  @media screen and (max-width: 1200px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 650px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const OffcanvasStyled = styled(Offcanvas)``;

const OffcanvasHeaderStyled = styled(OffcanvasHeader)`
  background-color: #4ca757;
  .btn-close {
    margin-right: 20px;
  }
`;

const OffcanvasBodyStyled = styled(OffcanvasBody)`
  background-color: #4ca757;
`;

const CarouselPointTitleStyled = styled.span`
  color: #4ca757;
  text-shadow: 5px 6px 7px rgba(0, 0, 0, 0.25);
  font-size: 127px;
  font-weight: 800;
  line-height: 120px;
  margin-right: 22px;
  @media screen and (max-width: 900px) {
    font-size: 80px;
  }
  @media screen and (max-width: 768px) {
    font-size: 42px;
    line-height: 50px;
  }
`;

const ContentStyled = styled.div`
  padding-left: 70px;
  padding-right: 100px;
  margin-top: 200px;
  @media screen and (max-width: 768px) {
    margin-top: 140px;
  }
  @media screen and (max-width: 576px) {
    padding-left: 8px;
    padding-right: 8px;
    margin-top: 80px;
  }
`;

const NavWrapperStyled = styled.div`
  position: fixed;
  top: 0;
  transition: all 0.3s;
  z-index: 2;
  width: 100%;
  &:has(.subNav:hover) {
    background-color: #4ca757b0;
    &.activeHideNav {
      background-color: #ffffff;
    }
  }
  &.activeHideNav {
    background-color: #ffffff;
  }
  &.scrollhide {
    top: -200px;
  }
`;

const SubnavContent = styled.div`
  display: none;
  position: fixed;
  left: 0;
  background-color: #4ca757fa;
  width: 100%;
  z-index: 1;
  height: 100%;
  @media screen and (max-width: 992px) {
    position: block;
  }
`;

const RowSubNavContentStyled = styled(Row)`
  padding: 0px 70px;
  @media screen and (max-width: 992px) {
    padding: 0px 16px;
  }
`;

const HeadingSubNavStyled = styled.div`
  color: #fff;
  font-family: Averta Std CY;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

const HeadingTitleSubNavStyled = styled(HeadingSubNavStyled)`
  margin-right: 100px;
  height: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  margin-bottom: 27px;
  position: relative;
  color: rgba(255, 255, 255, 0.552);
  cursor: pointer;
  &:hover {
    animation: hoverColorNav 1000ms forwards;
    @keyframes hoverColorNav {
      0% {
        color: rgba(255, 255, 255, 0.552);
      }
      100% {
        color: #fff;
      }
    }
  }

  &:hover::after {
    content: '';
    border-top: 1px solid #fff;
    position: absolute;
    bottom: 0;
    left: 0;

    animation: hoverNav 700ms forwards;
    @keyframes hoverNav {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 992px) {
    color: #fff;
    font-family: Averta Std CY;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.8px;
    text-transform: capitalize;
    margin-right: 0px;
    margin-bottom: 8px;
    height: 32px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.8);
  }
`;

const DesCriptionSubNavStyled = styled(CarouselDescriptionStyled)`
  margin-top: 0px;
`;

const ImageSubNavStyled = styled(Image)`
  margin-top: 65px;
  margin-right: 40px;
  margin-left: 10px;
`;

const ButtonCanvas = styled.div<{ $isUpper: boolean }>`
  width: 21px;
  height: 6px;
  cursor: pointer;
  vertical-align: middle;
  background: url(${(props) => props.$isUpper ? '/canvas.svg' : 'canvasBlack.svg'});
`;

const DesCriptionWrapperSubNav = styled.div`
  margin-top: 122px;
`;

const CarouselTitleWrapper = styled.div`
  @media screen and (max-width: 650px) {
    margin-top: 100px;
  }
`;

const ColHeadingSubNav = styled(Col)`
  margin-top: 64px;
  @media screen and (max-width: 992px) {
    margin-top: 0px;
    padding: 0;
  }
`;

const FooterSubNavStyled = styled(HeadingSubNavStyled)`
  margin-top: 32px;
  font-size: 16px;
  line-height: 36px;
`;

const SubNavTitleStyled = styled.div`
  position: relative;
  padding-bottom: 45px;
`;

function HeaderContainer() {
  const timeTransition = 5000;

  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isUpper, setIsUpper] = useState(true);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const CarouselItemData = [
    {
      title: 'Building For Green Energy',
      backgroundImg: '/background-logo1.svg',
    },
    {
      title: 'Victory Park',
      backgroundImg: '/background-logo2.svg',
    },
    {
      title: 'Site Conditions',
      backgroundImg: '/background-logo3.svg',
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 0) ||
        currentScrollPos <= 200
    );

    setPrevScrollPos(currentScrollPos);
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  useEffect(() => {
    if (offset > 150) {
      setIsUpper(false);
    } else {
      setIsUpper(true);
    }
  }, [offset]);

  return (
    <div>
      <HeaderStyled className="header">
        <NavWrapperStyled
          className={`${isUpper ? '' : 'activeHideNav'} ${
            visible ? '' : 'scrollhide'
          }`}
        >
          <HeaderLogoStyled>
            <Image
              src={isUpper ? '/logo.svg' : '/logoColor.svg'}
              alt=""
              width={122}
              height={74}
            />
            <ContactStyled
              $textBlack={isUpper}
              className="mt-4 d-none d-lg-inline"
            >
              +00 9875466
            </ContactStyled>
            <div className="d-flex align-items-center d-inline d-lg-none">
              <ButtonCanvas $isUpper={isUpper} onClick={handleShow} />
            </div>
          </HeaderLogoStyled>
          <HeaderNavStyled className="d-none d-lg-flex">
            <ColStyled className="titleNav">
              <NavItem item={'Home'} textBlack={isUpper ? false : true} />
            </ColStyled>
            <ColSubNavStyled className="position-relative subNav">
              <SubNavTitleStyled>
                <NavItem item={'About us'} textBlack={isUpper ? false : true} />
                <ImageStyled
                  src={'/arrow-down.svg'}
                  alt=""
                  width={10}
                  height={5}
                  className="d-none d-lg-flex"
                />
              </SubNavTitleStyled>
              <SubnavContent className="subnavContent">
                <RowSubNavContentStyled>
                  <ColHeadingSubNav xl={4}>
                    <HeadingTitleSubNavStyled>
                      Introduce
                    </HeadingTitleSubNavStyled>
                    <HeadingTitleSubNavStyled>
                      Our People
                    </HeadingTitleSubNavStyled>
                    <HeadingTitleSubNavStyled>QHSE</HeadingTitleSubNavStyled>
                    <HeadingTitleSubNavStyled>
                      Asset And facility
                    </HeadingTitleSubNavStyled>
                  </ColHeadingSubNav>
                  <Col xl={8} className="d-none d-xl-flex">
                    <ImageSubNavStyled
                      src={'/introduceContentNav.svg'}
                      alt=""
                      width={302}
                      height={351}
                    />
                    <DesCriptionWrapperSubNav>
                      <HeadingSubNavStyled className="mb-4">
                        Introduce
                      </HeadingSubNavStyled>
                      <DesCriptionSubNavStyled>
                        The Company comprises dynamic qualified personnel,
                        experienced in the field of offshore transportation and
                        installation
                      </DesCriptionSubNavStyled>
                      <FooterSubNavStyled>SEE MORE +</FooterSubNavStyled>
                    </DesCriptionWrapperSubNav>
                  </Col>
                </RowSubNavContentStyled>
              </SubnavContent>
            </ColSubNavStyled>
            <ColStyled>
              <NavItem item={'Project'} textBlack={isUpper ? false : true} />
            </ColStyled>
            <ColStyled>
              <NavItem item={'Service'} textBlack={isUpper ? false : true} />
            </ColStyled>
            <ColStyled>
              <NavItem
                item={'News & Event'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
            <ColStyled>
              <NavItem item={'Careers'} textBlack={isUpper ? false : true} />
            </ColStyled>
            <ColStyled>
              <NavItem item={'Contact'} textBlack={isUpper ? false : true} />
            </ColStyled>
          </HeaderNavStyled>
        </NavWrapperStyled>
        <CarouselStyled
          onSelect={handleSelect}
          interval={null}
          pause={false}
          controls={false}
        >
          <CarouselItemStyled $Img={CarouselItemData[0].backgroundImg}>
            <ContentStyled className="row d-flex">
              <CarouselTitleWrapper className="col-xl-8">
                <CarouselTitleStyled>Building For </CarouselTitleStyled>
                <br />
                <CarouselPointTitleStyled>Green</CarouselPointTitleStyled>
                <CarouselTitleStyled>Energy </CarouselTitleStyled>
              </CarouselTitleWrapper>
              <CarouselDescriptionStyled className="col-xl-4">
                We provide types of services for Wind Farm projects in Vietnam.
                With <span className="text-white bold">153+ MW of Wind</span>{' '}
                turbines installed since established, we are confident to
                provide the best services to our customer.
              </CarouselDescriptionStyled>
            </ContentStyled>
          </CarouselItemStyled>
          <CarouselItemStyled $Img={CarouselItemData[1].backgroundImg}>
            <ContentStyled className="row d-flex">
              <CarouselTitleWrapper className="col-xl-8">
                <CarouselTitleStyled>Victory </CarouselTitleStyled>
                <br />
                <CarouselPointTitleStyled>Park</CarouselPointTitleStyled>
              </CarouselTitleWrapper>
              <CarouselDescriptionStyled className="col-xl-4">
                We provide types of services for Wind Farm projects in Vietnam.
                With <span className="text-white fw-bold">153+ MW of Wind</span>{' '}
                turbines installed since established, we are confident to
                provide the best services to our customer.
              </CarouselDescriptionStyled>
            </ContentStyled>
          </CarouselItemStyled>
          <CarouselItemStyled $Img={CarouselItemData[2].backgroundImg}>
            <ContentStyled className="row d-flex">
              <CarouselTitleWrapper className="col-xl-8">
                <CarouselTitleStyled>Site </CarouselTitleStyled>
                <br />
                <CarouselPointTitleStyled>Conditions</CarouselPointTitleStyled>
              </CarouselTitleWrapper>
              <CarouselDescriptionStyled className="col-xl-4">
                We provide types of services for Wind Farm projects in Vietnam.
                With <span className="text-white fw-bold">153+ MW of Wind</span>{' '}
                turbines installed since established, we are confident to
                provide the best services to our customer.
              </CarouselDescriptionStyled>
            </ContentStyled>
          </CarouselItemStyled>
        </CarouselStyled>
      </HeaderStyled>
      <OffcanvasStyled
        placement={'end'}
        show={show}
        onHide={handleClose}
        className="w-100"
      >
        <OffcanvasHeaderStyled closeButton>
          <Image src={'/logo.svg'} alt="" width={122} height={74} />
        </OffcanvasHeaderStyled>
        <OffcanvasBodyStyled>
          <HeaderNavStyled>
            <ColStyled className="titleNav">
              <NavItem item={'Home'} textBlack={isUpper ? false : true} />
            </ColStyled>
            <ColStyled>
              <NavItem item={'About us'} textBlack={isUpper ? false : true} />
              {/* <SubnavContent className="subnavContent">
                <RowSubNavContentStyled>
                  <ColHeadingSubNav>
                    <HeadingTitleSubNavStyled>
                      Introduce
                    </HeadingTitleSubNavStyled>
                    <HeadingTitleSubNavStyled>
                      Our People
                    </HeadingTitleSubNavStyled>
                    <HeadingTitleSubNavStyled>QHSE</HeadingTitleSubNavStyled>
                    <HeadingTitleSubNavStyled>
                      Asset And facility
                    </HeadingTitleSubNavStyled>
                  </ColHeadingSubNav>
                </RowSubNavContentStyled>
              </SubnavContent> */}
            </ColStyled>
            <ColStyled>
              <NavItem item={'Project'} textBlack={isUpper ? false : true} />
            </ColStyled>
            <ColStyled>
              <NavItem item={'Service'} textBlack={isUpper ? false : true} />
            </ColStyled>
            <ColStyled>
              <NavItem
                item={'News & Event'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
            <ColStyled>
              <NavItem item={'Careers'} textBlack={isUpper ? false : true} />
            </ColStyled>
            <ColStyled>
              <NavItem item={'Contact'} textBlack={isUpper ? false : true} />
            </ColStyled>
          </HeaderNavStyled>
        </OffcanvasBodyStyled>
      </OffcanvasStyled>
    </div>
  );
}

export default HeaderContainer;

'use client';
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
import SliderHome from '../SliderHome/SliderHome';

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

const NavWrapperStyled = styled.div`
  position: fixed;
  top: 0;
  transition: all 0.3s;
  z-index: 4;
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
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isUpper, setIsUpper] = useState(true);

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
              <NavItem
                urlName={'/'}
                item={'Home'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
            <ColSubNavStyled className="position-relative subNav">
              <SubNavTitleStyled>
                <NavItem
                  urlName={'/'}
                  item={'About us'}
                  textBlack={isUpper ? false : true}
                />
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
              <NavItem
                urlName={'/news'}
                item={'News'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
            <ColStyled>
              <NavItem
                urlName={'/'}
                item={'Service'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
            <ColStyled>
              <NavItem
                urlName={'/'}
                item={'News & Event'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
            <ColStyled>
              <NavItem
                urlName={'/'}
                item={'Careers'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
            <ColStyled>
              <NavItem
                urlName={'/'}
                item={'Contact'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
          </HeaderNavStyled>
        </NavWrapperStyled>
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
              <NavItem
                urlName={'/'}
                item={'Home'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
            <ColStyled>
              <NavItem
                urlName={'/'}
                item={'About us'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
            <ColStyled>
              <NavItem
                urlName={'/about-us'}
                item={'Project'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
            <ColStyled>
              <NavItem
                urlName={'/'}
                item={'Service'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
            <ColStyled>
              <NavItem
                urlName={'/'}
                item={'News & Event'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
            <ColStyled>
              <NavItem
                urlName={'/'}
                item={'Careers'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
            <ColStyled>
              <NavItem
                urlName={'/'}
                item={'Contact'}
                textBlack={isUpper ? false : true}
              />
            </ColStyled>
          </HeaderNavStyled>
        </OffcanvasBodyStyled>
      </OffcanvasStyled>
    </div>
  );
}

export default HeaderContainer;

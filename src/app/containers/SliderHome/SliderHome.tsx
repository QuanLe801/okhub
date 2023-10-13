import React, { useEffect, useRef, useState } from 'react';
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

const CarouselTitleWrapper = styled.div`
  @media screen and (max-width: 650px) {
    margin-top: 100px;
  }
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

function SliderHome() {
  const [index, setIndex] = useState(0);

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

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
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
              turbines installed since established, we are confident to provide
              the best services to our customer.
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
              turbines installed since established, we are confident to provide
              the best services to our customer.
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
              turbines installed since established, we are confident to provide
              the best services to our customer.
            </CarouselDescriptionStyled>
          </ContentStyled>
        </CarouselItemStyled>
      </CarouselStyled>
    </div>
  );
}

export default SliderHome;

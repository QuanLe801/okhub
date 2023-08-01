import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import { styled } from 'styled-components';

const CarouselStyled = styled(Carousel)`
  background-color: inherit;
  width: 40%;
  margin-bottom: 16px;
  @media screen and (max-width: 992px) {
    width: 100%;
    margin-bottom: 220px;
  }
  @media screen and (max-width: 576px) {
    margin-bottom: 100px;
  }
  .carousel-indicators {
    bottom: 85px;
    @media screen and (max-width: 992px) {
      bottom: -140px;
    }
    @media screen and (max-width: 576px) {
      bottom: -100px;
    }
  }
  .carousel-indicators .active {
    transform: scale(1.3);
    transition: all 300ms;
  }
  .carousel-indicators button:first-child.active {
    background-image: url('/buttonAboutUsColor1.svg');
    transition: opacity 300ms ease-in;
  }
  .carousel-indicators button:nth-child(2).active {
    background-image: url('/buttonAboutUsColor2.svg');
    transition: opacity 300ms ease-in;
  }
  .carousel-indicators button:nth-child(3).active {
    background-image: url('/buttonAboutUsColor3.svg');
    transition: opacity 300ms ease-in;
  }

  button {
    position: absolute;
    width: 171.44px !important;
    height: 171.44px !important;
    border-radius: 50%;
    margin-top: -40px;
    @media screen and (max-width: 1200px) {
      width: 121.44px !important;
      height: 121.44px !important;
    }
    @media screen and (max-width: 768px) {
      width: 80px !important;
      height: 80px !important;
    }

    &:nth-child(1) {
      background: url('/buttonAboutUsNoColor1.svg') no-repeat;
      background-size: cover;
      right: -90%;
      /* @media screen and (max-width: 0px) {
      } */
      @media screen and (max-width: 992px) {
        right: 0;
        left: 30%;
      }
    }
    &:nth-child(2) {
      background: url('/buttonAboutUsNoColor2.svg') no-repeat;
      background-size: cover;
      right: -150%;
      @media screen and (max-width: 1400px) {
        right: -160%;
      }
      @media screen and (max-width: 992px) {
        right: 0%;
        left: -20%;
      }
    }
    &:nth-child(3) {
      background: url('/buttonAboutUsNoColor3.svg') no-repeat;
      background-size: cover;
      right: -210%;
      @media screen and (max-width: 1400px) {
        right: -230%;
      }
      @media screen and (max-width: 992px) {
        right: 0;
        left: 80%;
      }
    }
  }
`;
const WrapperStyled = styled.div`
  background: linear-gradient(180deg, #4ca757, #16a571);
  padding: 120px 70px 0px 70px;
  @media screen and (max-width: 576px) {
    padding: 60px 10px 0px 10px;
  }
`;

const TitleStyled = styled.span`
  font-family: Averta Std CY;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 2.16px;
  text-transform: uppercase;
  color: #fff;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    letter-spacing: 1.68px;
  }
`;

const SubTitleStyled = styled.div`
  font-family: Averta Std CY Extra Bold;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: -3px;
  text-transform: capitalize;
  color: #fff;
  @media screen and (max-width: 576px) {
    font-size: 30px;
    letter-spacing: -1.5px;
  }
`;

export const ButtonStyled = styled.button<{
  $src: string;
  $border?: string;
  $color?: string;
  $width?: string;
  $height?: string;
}>`
  background: url(${(props) => props.$src});
  width: ${(props) => (props.$width ? props.$width : '60px')};
  height: ${(props) => (props.$height ? props.$height : '60px')};
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  border: ${(props) => (props.$border ? props.$border : 'none')};
  color: ${(props) => (props.$color ? props.$color : 'inherit')};
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const CarouselItemStyled = styled(Carousel.Item)`
  width: 100%;
  font-family: Averta Std CY;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 33px;
  color: #fff;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;

const ImageStyled = styled(Image)`
  cursor: pointer;
  margin: 0px 24px;
`;

const AchieDesCriptionStyled = styled.div`
  font-family: Averta Std CY Bold;
  font-size: 43px;
  font-style: normal;
  font-weight: 800;
  line-height: 56px;
  letter-spacing: -2.3px;
  color: #fff;
  margin-top: 80px;
  width: 80%;
  @media screen and (max-width: 576px) {
    font-size: 25px;
    letter-spacing: -0.25px;
    line-height: 32px;
  }
`;

const NumberStyled = styled.div<{ $description: string }>`
  opacity: 0.8999999761581421;
  position: relative;
  background: linear-gradient(181deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #fff;
  backdrop-filter: blur(2px);
  font-size: 125px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  &::after {
    content: '+';
    position: absolute;
    top: 10px;
    font-size: 75px;
    background: linear-gradient(
      180deg,
      #fff 38.06%,
      rgba(255, 255, 255, 0) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and (max-width: 576px) {
      font-size: 55px;
    }
  }
  &::before {
    content: ${(props) => `"${props.$description}"`};
    font-family: Averta Std CY Regular;
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    text-transform: uppercase;
    position: absolute;
    bottom: 0;
    left: 5px;
    color: #fff;
    @media screen and (max-width: 576px) {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 576px) {
    font-size: 80px;
  }
`;

const RowAchieNumberStyled = styled(Row)`
  padding-bottom: 96px !important;
`;

function AchievementContainer() {
  const [index, setIndex] = useState(0);
  const ref = useRef<any>(null);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handleClickDecre = () => {
    ref?.current?.prev();
  };

  const handleClickIncre = () => {
    ref?.current?.next();
  };
  const sliderContent = [
    'A business development organisation helping to make valuable connections between businesses in the global energy sector.',
    'A business development organisation helping to make valuable connections between businesses in the global energy sector.',
    'A business development organisation helping to make valuable connections between businesses in the global energy sector.',
  ];

  return (
    <WrapperStyled className="mw-100">
      <Row className="mw-100 m-0">
        <Col className="m-0 p-0">
          <TitleStyled>we are</TitleStyled>
          <br />
          <SubTitleStyled data-aos="flip-up" data-aos-delay="300">
            A member of
          </SubTitleStyled>
          <CarouselStyled
            interval={null}
            ref={ref}
            onSelect={handleSelect}
            controls={false}
          >
            {sliderContent.map((item, key) => (
              <CarouselItemStyled key={key}>
                <span>{item}</span>
              </CarouselItemStyled>
            ))}
          </CarouselStyled>

          <ButtonStyled
            className="me-3 "
            $src={'/Arrow-left.svg'}
            onClick={handleClickDecre}
          />
          <ButtonStyled $src={'/Arrow-right.svg'} onClick={handleClickIncre} />
        </Col>
      </Row>
      <AchieDesCriptionStyled>
        Company value reflects its ability to generate future profits,
        management, and market position.
      </AchieDesCriptionStyled>
      <RowAchieNumberStyled
        className=" m-0 d-flex justify-content-evenly"
        data-aos="fade-down"
      >
        <Col lg={3} xs={6} className="p-0">
          <NumberStyled $description="Founded year">2</NumberStyled>
        </Col>
        <Col lg={3} xs={6} className="p-0">
          <NumberStyled $description="Personnel">20</NumberStyled>
        </Col>
        <Col lg={3} xs={6} className="p-0">
          <NumberStyled $description="Projects">14</NumberStyled>
        </Col>
        <Col lg={3} xs={6} className="p-0">
          <NumberStyled $description="Clinets & Partners">20</NumberStyled>
        </Col>
      </RowAchieNumberStyled>
    </WrapperStyled>
  );
}

export default AchievementContainer;

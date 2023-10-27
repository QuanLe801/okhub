'use client';
import CardNews from '@/app/components/CardNews/CardNews';
import { newsList } from '@/app/utils/const';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { styled } from 'styled-components';

const SliderWrapperStyled = styled.div`
  padding: 10px 0px 10px 70px;
  background: #fafafa;
  @media screen and (max-width: 576px) {
    padding: 10px 0px 10px 10px;
  }
`;

const ButtonStyled = styled.button<{
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
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: 40px 40px;
  }
`;

const SliderStyled = styled(Slider)`
  background-color: #fff;
  .slick-list {
    position: relative;
  }
  .slick-list:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    //--------------------------------TODO:hover
    background-image: linear-gradient(to right, rgba(255, 0, 0, 0), #ffffff9e);
  }
  .slick-slide {
    background: #fafafa;
  }
`;

export const TitleWrapperStyled = styled.div`
  padding: 110px 70px 20px 70px;
  @media screen and (max-width: 576px) {
    padding: 60px 20px 20px 10px;
  }
`;
export const ButtonMoreStyled = styled.button`
  height: 60px;
  padding: 10px 35px;
  border-radius: 32px;
  background: linear-gradient(180deg, #4ca757, #16a571);
  box-shadow: 0px 0px 50px 0px rgba(73, 178, 93, 0.16);
  border: none;
  color: white;
  font-family: Averta Std CY;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  &:hover {
    background-image: linear-gradient(180deg, #2c5f32, #13895e);
  }
  @media screen and (max-width: 992px) {
    height: 40px;
    padding: 0px 18px;
    font-size: 14px;
  }
`;

export const TitleStyled = styled.div`
  color: #376a66;
  text-align: center;
  font-family: Averta Std CY;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 2.16px;
  text-transform: uppercase;
  text-align: left;
  @media screen and (max-width: 992px) {
    font-size: 17px;
    line-height: 25px;
    letter-spacing: 2.68px;
  }
`;

const NewsBlockStyled = styled.div`
  background: #fafafa;
  padding-bottom: 116px;
`;

export const DescriptionStyled = styled.div`
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: 80px;
  letter-spacing: -3px;
  text-transform: capitalize;
  background: linear-gradient(180deg, #4ca757, #16a571);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 992px) {
    font-size: 32px;
    line-height: 30px;
    letter-spacing: -0.5px;
  }
`;

const NextAndProcessWrapper = styled.div`
  margin: 40px 70px 0px 70px;
  @media screen and (max-width: 576px) {
    margin: 16px 25px 0px 10px;
  }
`;

const ProcessStyled = styled.div<{ $totalItem: any; $index: any }>`
  width: 100%;
  height: 3px;
  position: relative;
  background: rgba(255, 255, 255, 0.6);
  margin-top: 31.5px;
  margin-left: 62px;
  @media screen and (max-width: 992px) {
    margin-top: 18.5px;
  }
  &:after {
    content: '';
    background: linear-gradient(180deg, #4ca757, #16a571);
    position: absolute;
    width: ${(props) => (100 / props.$totalItem) * (props.$index + 1)}%;
    height: 3px;
    top: 50%;
    left: 0;
    transition: width 0.3s;
  }
`;

const widthScreen = () => {
  let width;
  if (typeof window !== 'undefined') {
    width = window.innerWidth;
    return width;
  } else width = 0;
  return width;
};

function NewsContainer() {
  const router = useRouter();
  const width = widthScreen();
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<any>(null);

  const getTotalPage = () => {
    let totalPage;
    if (width <= 992) {
      //totalPage = totalItemNews - (SlideToShow - 1)
      //sử dụng nguyên tắc hoán vị để tính totalPage
      totalPage = newsList.length - (1 - 1);
    } else if (width <= 1400) {
      totalPage = newsList.length - (2 - 1);
    } else if (width <= 1700) {
      totalPage = newsList.length - (3 - 1);
    } else if (width > 1700) {
      totalPage = newsList.length - (4 - 1);
    }
    return totalPage;
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(getTotalPage());
  console.log(activeSlide);

  return (
    <NewsBlockStyled>
      <TitleWrapperStyled className="d-flex justify-content-between align-items-center">
        <div>
          <TitleStyled>NEWS</TitleStyled>
          <DescriptionStyled>Lastest News</DescriptionStyled>
        </div>
        <ButtonMoreStyled onClick={() => router.push('/news')}>
          See more
        </ButtonMoreStyled>
      </TitleWrapperStyled>
      <SliderWrapperStyled className="mx-100">
        <SliderStyled {...settings} ref={sliderRef}>
          {newsList.map((item, key) => (
            <CardNews img={item.img} content={item.content} key={key} />
          ))}
        </SliderStyled>
      </SliderWrapperStyled>
      <NextAndProcessWrapper className="d-flex justify-content-between">
        <div className="d-flex">
          <ButtonStyled
            $border="1px solid #16A571"
            $width="60px"
            $height="60px"
            className="me-4"
            $src={'/Arrow-left-green.svg'}
            onClick={() => sliderRef?.current?.slickGoTo(activeSlide - 1)}
          />
          <ButtonStyled
            $width="60px"
            $height="60px"
            $src={'/Arrow-right-white.svg'}
            onClick={() => sliderRef?.current?.slickGoTo(activeSlide + 1)}
          />
        </div>
        <ProcessStyled $totalItem={getTotalPage()} $index={activeSlide} />
      </NextAndProcessWrapper>
    </NewsBlockStyled>
  );
}

export default NewsContainer;

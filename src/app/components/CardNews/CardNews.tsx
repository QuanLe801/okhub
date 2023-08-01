import React from 'react';
import { Card } from 'react-bootstrap';
import { styled } from 'styled-components';

interface CardNewsProps {
  img: string;
  content: string;
}

const CardImgStyled = styled(Card.Img)`
  width: 375px;
  height: 248.062px;
  object-fit: cover;
  border-radius: 0;
  @media screen and (max-width: 400px) {
    width: 255px;
    height: 150px;
  }
`;

const CardStyled = styled(Card)`
  position: relative;
  border: 0;
  border-radius: 0 !important;
  margin-right: 25px;
  width: 375px;
  border-radius: none;
  background: #fff;
  &:hover {
    background: linear-gradient(180deg, #4ca757, #16a571);
    .card-body {
      .card-title {
        color: #fff;
      }
      .card-text {
        color: #fff;
      }
    }
    .more-text {
      color: #fff;
    }
  }
  @media screen and (max-width: 400px) {
    width: 255px;
  }
`;

const CardTitleStyled = styled(Card.Title)`
  color: #376a66;
  margin: 25px 13px 0px 16px;
  font-family: Averta Std CY;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  text-transform: uppercase;
  transition: all 0.3s;
`;

const CardTextStyled = styled(Card.Text)`
  color: #394854;
  font-family: Averta Std CY;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.6px;
  padding: 16px 30px 69px 16px;
  transition: all 0.3s;
`;

const ButtonMoreStyled = styled.div`
  position: absolute;
  bottom: 24px;
  right: 30px;
  color: #394854;
  font-family: Averta Std CY;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  transition: all 0.3s;
`;

function CardNews({ ...props }: CardNewsProps) {
  const { img, content } = props;
  return (
    <CardStyled>
      <CardImgStyled variant="top" src={img} />
      <Card.Body className="p-0">
        <CardTitleStyled>26.04.2022 / Event</CardTitleStyled>
        <CardTextStyled>{content}</CardTextStyled>
      </Card.Body>
      <ButtonMoreStyled className="more-text">SEE MORE +</ButtonMoreStyled>
    </CardStyled>
  );
}

export default CardNews;

import React from 'react';
import { styled } from 'styled-components';
import './styles.css';

interface NavItemInterface {
  item: string;
  textBlack: boolean;
}

const NavItemStyled = styled.div<{ $textBlack: boolean }>`
  position: relative;
  color: ${(props) => (props.$textBlack ? '#000000' : '#fff')};
  font-family: Averta Std CY;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  padding-top: 13px;
  border-top: 1px solid
    ${(props) => (props.$textBlack ? '#00000024' : 'rgba(255, 255, 255, 0.15)')};
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.$textBlack ? '#4ca757b0' : '#fff')};
  }
  &:hover::after {
    content: '';
    border-top: 1px solid
      ${(props) => (props.$textBlack ? '#4ca757b0' : '#fff')};
    width: 10px;
    height: 1px;
    position: absolute;
    left: 0;
    top: 0;

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
    font-size: 20px;
    font-weight: 600;
    border-top: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    line-height: 39px;
    margin-top: 8px;
    padding-bottom: 8px;
    color: rgba(255, 255, 255, 0.8);
    &:hover::after {
      content: '';
      border-top: none;
      border-bottom: 1px solid white;
      width: 10px;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: 0;
      top: auto;

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
  }
`;

function NavItem({ ...props }: NavItemInterface) {
  const { item, textBlack } = props;

  return <NavItemStyled $textBlack={textBlack}>{item}</NavItemStyled>;
}

export default NavItem;

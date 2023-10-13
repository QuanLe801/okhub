import React from 'react';
import styled from 'styled-components';

const CardBLogLargeWrapper = styled.div`
  margin-top: 100px;
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  width: 1260px;
  height: 450px;
  background-color: red;
`;

function CardBlogLargeItem() {
  return <CardBLogLargeWrapper>CardBlogLargeItem</CardBLogLargeWrapper>;
}

export default CardBlogLargeItem;

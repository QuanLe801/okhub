import CardBlogItem from '@/app/components/Card-blog-item/Card-blog-item';
import React from 'react';
import styles from './styles.module.css';
import { newsList } from '@/app/utils/const';
import {
  TitleWrapperStyled,
  TitleStyled,
  DescriptionStyled,
  ButtonMoreStyled,
} from '../NewsContainer/NewsContainer';

function BlogListingContainer() {
  return (
    <div className={styles.blogContainerWrapper}>
      <TitleWrapperStyled className="d-flex justify-content-between align-items-center">
        <div>
          <TitleStyled>NEWS</TitleStyled>
          <DescriptionStyled>Lastest News</DescriptionStyled>
        </div>
      </TitleWrapperStyled>
      <div className={styles.blogListingWrapper}>
        {newsList.map((item, key) => (
          <CardBlogItem
            key={key}
            img={item.img}
            content={item.content}
            authorName={item.authorName}
            createdAt={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogListingContainer;

import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import styled from 'styled-components';

interface CardBlog {
  img: string;
  content: string;
  authorName: string;
  createdAt: string;
}

const ImageStyled = styled(Image)`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 9px;
`;

function CardBlogItem({ ...props }: CardBlog) {
  const { img, content, authorName, createdAt } = props;

  return (
    <div className={styles.cardWrapper}>
      <ImageStyled
        src={img}
        width={360}
        height={240}
        alt=""
        objectFit="cover"
      />
      <div className={styles.cardContent}>
        <div className={styles.cardType}>Technology</div>
        <div className={styles.cardDescription}>{content}</div>
        <div className={styles.cardFooter}>
          <Image
            src={'/profile.svg'}
            width={36}
            height={36}
            alt=""
            objectFit="cover"
            className={styles.profileImage}
          />
          <span className={styles.profileName}>{authorName}</span>
          <span className={styles.createdAt}>{createdAt}</span>
        </div>
      </div>
    </div>
  );
}

export default CardBlogItem;

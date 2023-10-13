'use client';
import BlogListingContainer from '@/app/containers/Blog-listing-container/Blog-listing-container';
import Footer from '@/app/containers/Footer/Footer';
import HeaderContainer from '@/app/containers/Header/HeaderContainer';
import SliderHome from '@/app/containers/SliderHome/SliderHome';
import React from 'react';

function page() {
  return (
    <>
      <SliderHome />
      <BlogListingContainer />
    </>
  );
}

export default page;

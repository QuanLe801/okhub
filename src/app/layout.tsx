'use client';
import { useEffect } from 'react';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import HeaderContainer from './containers/Header/HeaderContainer';
import Footer from './containers/Footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <HeaderContainer />
      <body className="main">{children}</body>
      <Footer />
    </html>
  );
}

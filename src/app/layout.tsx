'use client';
import { useEffect } from 'react';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';

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
      <body className="main">{children}</body>
    </html>
  );
}

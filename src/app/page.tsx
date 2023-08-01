'use client';
import './page.module.css';
import HeaderContainer from './containers/Header/HeaderContainer';
import AboutUsContainer from './containers/AboutUsComtainer/AboutUsContainer';
import AchievementContainer from './containers/AchievementContainer/AchievementContainer';
import NewsContainer from './containers/NewsContainer/NewsContainer';
import Footer from './containers/Footer/Footer';
export default function Home() {
  return (
    <div>
      <HeaderContainer />
      <AboutUsContainer />
      <AchievementContainer />
      <NewsContainer />
      <Footer />
    </div>
  );
}

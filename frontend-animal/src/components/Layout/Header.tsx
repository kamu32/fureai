
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header"
      className={`header ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
            <div className="header-content">
                <div className="header-logo">
                    <a href="/">
                        <img src="/img/Forte-logo.png" alt="Forte Logo" />
                    </a>
                </div>
                <div className="header-menu">
                    <nav id="pc-nav">
                        <ul className="all-nav">
                            <li className="nav-about">
                                <a href="/about" className="nav-text">
                                    <span className="header-span">私たちについて</span><br />about us
                                </a>
                            </li>
                            <li className="nav-service menu-item">
                                <div className="nav-text">
                                    <span className="header-span">サービス</span><br />service
                                </div>
                                <ul className="submenu">
                                    <li>
                                        <a href="/stores" className="sub-text">店舗紹介</a>
                                    </li>
                                    <li>
                                        <a href="/satooya" className="sub-text">里親募集</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-news">
                                <a href="/news-list" className="nav-text">
                                    <span className="header-span">ニュース・ブログ</span><br />news・blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="mail-button">
                    <a href="/contact">
                        <span className="contact-text">お問い合わせ</span><br />CONTACT
                    </a>
                </div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav className="menu">
                        <div className="header-logo">
                            <a href="/">
                                <img src="/img/Forte-logo.png" alt="Forte Logo" />
                            </a>
                        </div>
                        <ul className="menu-flex">
                            <li className="menu-li">
                                <a href="/about" className="menu-title">ABOUT US<br /><span>私たちについて</span></a>
                                <ul className="menu-sub">
                                    <li>
                                        <a href="/about" className="sub-text">ー制作中ー</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-li">
                                <a href="#" className="menu-title">SERVICE<br /><span>サービス</span></a>
                                <ul className="menu-sub">
                                    <li>
                                        <a href="/stores" className="sub-text">店舗紹介</a>
                                    </li>
                                    <li>
                                        <a href="/satooya" className="sub-text">里親募集</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-li">
                                <a href="/contact" className="menu-title">CONTACT<br /><span>お問い合わせ</span></a>
                                <ul className="menu-sub">
                                    <li>
                                        <a href="/contact" className="sub-text">お問い合わせ<br />フォーム</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-li">
                                <a href="/news-list" className="menu-title">NEWS・BLOG<br /><span>ニュース・ブログ</span></a>
                                <ul className="menu-sub">
                                    <li>
                                        <a href="/news-list" className="sub-text">ニュース・ブログ</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <a href="https://www.instagram.com/fureai222/" className="instagram-logo">
                            <img src="./img/FORTE-instagram.png" alt="Instagram Logo" />
                        </a>
                    </nav>
                </div>
            </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
        <div className="top-content">
            <div className="top-img-select">
                <img src="./img/service-nav.png" className="template-img right" alt="Service Navigation" />
                <img src="./img/inuta.jpg" className="template-img center" alt="Inuta" />
                <img src="./img/Forte-top.png" className="template-img left" alt="Forte Top" />
            </div>
            <div className="top-title">
                <div className="top-title-h">
                    <h1>Animal Protection Activity</h1>
                    <h2>動物と一緒に、幸せいっぱいに。</h2>
                </div>
            </div>
        </div>
        <div className="top-bottom">
            <div className="top-bottom-img">
                <img src="./img/top-bottom.png" alt="Top Bottom" />
            </div>
            <a href="https://www.instagram.com/fureai222/" className="instagram-logo">
                <img src="./img/FORTE-instagram.png" alt="Instagram Logo" />
            </a>
        </div>
    </>
  );
};

export default HomePage;

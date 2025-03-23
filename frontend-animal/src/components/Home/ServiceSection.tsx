
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
    return (
    <section id="service">
        <div className="service-title">
            <h2>SERVICE</h2>
        </div>
        {/* finding pet */}
        <div className="service-content finding-pet box">
            <div className="service-img box">
                <img src="./img/animal-oya.png" className="box" alt="Pet Adoption" />
            </div>
            <div className="service-detail">
                <h2 className="service-h">ペットの里親募集</h2>
                <div className="service-name">
                    <div className="service-text">
                        <p className="service-p">
                            新しい家族を待っている愛らしい子たちがいます。<br />
                            ペットとの素敵な出会いをお探しの方、ぜひご覧ください。
                        </p>
                        <p className="service-p">あなたの温かい手が、かけがえのない絆を生み出します。</p>
                    </div>
                    <div className="detail-btn">
                        <a href="/satooya" className="box Btn">
                            <span className="Btn-Text">詳しくはこちら</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* animal-cafe */}
        <div className="service-content animal-cafe box">
            <div className="service-img box">
                <img src="./img/animal-cafe.png" className="box" alt="Animal Cafe" />
            </div>
            <div className="service-detail">
                <h2 className="service-h">動物と過ごせるお店のご紹介</h2>
                <div className="service-name">
                    <div className="service-text">
                        <p className="service-p">
                            動物たちと一緒に、<br />
                            心温まるひと時を過ごしませんか？<br />
                            ふれあいを楽しめる素敵なお店をご紹介します。
                        </p>
                        <p className="service-p">ほっと一息付ける、癒しの時間をお届けします。</p>
                    </div>
                    <div className="detail-btn">
                        <a href="/stores" className="box Btn">
                            <span className="Btn-Text">詳しくはこちら</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ServiceSection;


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-16 pb-12 bg-pugeat-light-green">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">SERVICE</h1>
          <p className="text-xl text-center text-pugeat-dark-green/80 max-w-3xl mx-auto">
            私たちが提供するサービス
          </p>
        </div>
      </div>

      <div className="py-16 bg-pugeat-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* サービスカード1 */}
            <div className="service-card">
              <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-2xl">
                <img 
                  src="/lovable-uploads/5e3a71a2-4dea-48ab-a8a7-c0c3f83cf3c2.png" 
                  alt="ペットの里親募集" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">ペットの里親募集</h3>
              <p className="text-pugeat-dark-green/80 mb-6">
                飼いきれなく、保健所に連れていかれた犬たちは、
                救われる確率の低い命です。
                <br /><br />
                ペットに関わる悲劇が減るよう、
                ここで新しい家族を見つけてみませんか。
              </p>
              <Link to="/service/foster" className="btn-primary inline-block">
                詳しくはこちら
              </Link>
            </div>

            {/* サービスカード2 */}
            <div className="service-card">
              <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-2xl">
                <img 
                  src="/lovable-uploads/5e3a71a2-4dea-48ab-a8a7-c0c3f83cf3c2.png" 
                  alt="動物と過ごせるお店" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">動物と過ごせるお店のご紹介</h3>
              <p className="text-pugeat-dark-green/80 mb-6">
                日々の疲れが溜まる方、
                動物と触れ合ってみたい方、
                そして癒やされリラックスしたい方。
                <br /><br />
                気軽に通える場所のご紹介をいたします。
              </p>
              <Link to="/service/shops" className="btn-primary inline-block">
                詳しくはこちら
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Service;


import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
  return (
    <section className="py-20 bg-pugeat-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          SERVICE
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* サービスカード1 */}
          <div className="service-card">
            <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-2xl">
              <img 
                src="/lovable-uploads/photo-1535268647677-300dbf3d78d1.jpg" 
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
            <Link to="/service/foster" className="btn-outline inline-block">
              詳しくはこちら
            </Link>
          </div>

          {/* サービスカード2 */}
          <div className="service-card">
            <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-2xl">
              <img 
                src="/lovable-uploads/photo-1466721591366-2d5fba72006d.jpg" 
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
            <Link to="/service/shops" className="btn-outline inline-block">
              詳しくはこちら
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

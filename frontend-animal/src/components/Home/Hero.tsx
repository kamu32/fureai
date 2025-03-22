
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/photo-1472396961693-142e6e269027.jpg"
          alt="自然と動物"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pugeat-dark-green/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Animal Protection Activity
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            動物と一緒に、幸せいっぱいに。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/about" className="btn-primary">
              詳しく見る
            </Link>
            <Link to="/contact" className="btn-outline bg-white/20 backdrop-blur-sm">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      {/* シンプルな下向き矢印 */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">スクロールして続きを見る</span>
          <div className="w-0.5 h-8 bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

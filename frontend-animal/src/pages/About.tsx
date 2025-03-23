
import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="pt-24 pb-20 bg-pugeat-light-green">
        <div 
          // ref={headerRef} 
          className="container mx-auto px-4 py-16 opacity-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">ABOUT US</h1>
          <p className="text-xl text-center text-pugeat-dark-green/80 max-w-3xl mx-auto">
            私たちについて知ってください
          </p>
        </div>
      </div>

      <div className="py-20">
        <div 
          // ref={contentRef} 
          className="container mx-auto px-4 max-w-4xl opacity-0"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">私たちの使命</h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              私たちPugeatは、人と動物が共に幸せに暮らせる社会の実現を目指しています。動物たちの命を大切にし、保護活動を通じて彼らに新しい家族との出会いの場を提供します。
            </p>
            
            <p>
              また、動物と触れ合える場所の情報提供を通じて、多くの人が動物たちとの絆を深める機会を作ることで、動物愛護の精神を広めています。
            </p>

            <h3 className="text-2xl font-bold mt-12 mb-4">活動内容</h3>
            
            <ul>
              <li>保護された動物たちの里親募集支援</li>
              <li>動物と過ごせるカフェやショップの紹介</li>
              <li>動物愛護に関する啓発活動</li>
              <li>地域の動物保護団体との連携</li>
            </ul>

            <h3 className="text-2xl font-bold mt-12 mb-4">ビジョン</h3>
            
            <p>
              すべての動物が愛される世界を目指し、動物愛護の理念を広め、人と動物が互いを尊重し合える社会づくりに貢献します。私たちは、一つでも多くの命を救い、一人でも多くの人が動物との触れ合いを通じて幸せを感じられる活動を続けていきます。
            </p>

            <div className="mt-12 border-t border-pugeat-green/30 pt-8">
              <p className="italic text-pugeat-dark-green/70">
                「私たちは、動物たちの幸せは、人間の幸せにつながると信じています。」
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

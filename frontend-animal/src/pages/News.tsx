
import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout/Layout';

// ニュースの型定義
interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
}

// ダミーデータ
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: '動物保護団体の取組みについて',
    date: '2023年6月15日',
    image: '/lovable-uploads/5e3a71a2-4dea-48ab-a8a7-c0c3f83cf3c2.png',
    category: 'お知らせ'
  },
  {
    id: 2,
    title: 'みなさんにアイデアに助けられた時、どうしていますか？',
    date: '2023年5月21日',
    image: '/lovable-uploads/5e3a71a2-4dea-48ab-a8a7-c0c3f83cf3c2.png',
    category: 'ブログ'
  },
  {
    id: 3,
    title: '私たちの夢の一部を一緒に実現させるために',
    date: '2023年4月10日',
    image: '/lovable-uploads/5e3a71a2-4dea-48ab-a8a7-c0c3f83cf3c2.png',
    category: 'イベント'
  },
  {
    id: 4,
    title: '新しい里親を待っているペットたち',
    date: '2023年3月5日',
    image: '/lovable-uploads/5e3a71a2-4dea-48ab-a8a7-c0c3f83cf3c2.png',
    category: '里親募集'
  },
  {
    id: 5,
    title: '地域の動物愛護活動について',
    date: '2023年2月18日',
    image: '/lovable-uploads/5e3a71a2-4dea-48ab-a8a7-c0c3f83cf3c2.png',
    category: 'お知らせ'
  },
  {
    id: 6,
    title: '動物カフェの新オープン情報',
    date: '2023年1月30日',
    image: '/lovable-uploads/5e3a71a2-4dea-48ab-a8a7-c0c3f83cf3c2.png',
    category: 'お知らせ'
  }
];

const News = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const newsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    
    newsRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      
      newsRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Layout>
      <div className="pt-24 pb-20 bg-pugeat-light-green">
        <div 
          ref={headerRef} 
          className="container mx-auto px-4 py-16 opacity-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">NEWS & BLOG</h1>
          <p className="text-xl text-center text-pugeat-dark-green/80 max-w-3xl mx-auto">
            最新情報・お知らせ
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, i) => (
              <div 
                key={item.id}
                ref={el => newsRefs.current[i] = el}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <a href={`/news/${item.id}`}>
                  <div className="relative aspect-w-16 aspect-h-10 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-pugeat-green text-white px-3 py-1 rounded-full text-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-pugeat-dark-green/70 mb-2">{item.date}</p>
                    <h3 className="text-lg font-medium text-pugeat-dark-green line-clamp-2">{item.title}</h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;

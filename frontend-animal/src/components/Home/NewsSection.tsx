
import React from 'react';
import { Link } from 'react-router-dom';

// ニュースの型定義
interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
}

// ダミーデータ
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: '動物保護団体の取組みについて',
    date: '2023年6月15日',
    image: '/lovable-uploads/photo-1493962853295-0fd70327578a.jpg'
  },
  {
    id: 2,
    title: 'みなさんにアイデアに助けられた時、どうしていますか？',
    date: '2023年5月21日',
    image: '/lovable-uploads/photo-1452378174528-3090a4bba7b2.jpg'
  },
  {
    id: 3,
    title: '私たちの夢の一部を一緒に実現させるために',
    date: '2023年4月10日',
    image: '/lovable-uploads/photo-1487252665478-49b61b47f302.jpg'
  }
];

const NewsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">
            NEWS
          </h2>
          <Link 
            to="/news" 
            className="text-pugeat-dark-green hover:text-pugeat-green transition-colors flex items-center space-x-1"
          >
            <span>ニュース一覧</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Link to={`/news/${item.id}`}>
                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-pugeat-dark-green/70 mb-2">{item.date}</p>
                  <h3 className="text-lg font-medium text-pugeat-dark-green line-clamp-2">{item.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

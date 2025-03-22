
import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // フォーム送信をシミュレート
    setTimeout(() => {
      toast({
        title: "送信完了",
        description: "お問い合わせありがとうございます。48時間以内にご返信いたします。",
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="pt-24 pb-20 bg-pugeat-light-green">
        <div 
          ref={headerRef} 
          className="container mx-auto px-4 py-16 opacity-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">CONTACT</h1>
          <p className="text-xl text-center text-pugeat-dark-green/80 max-w-3xl mx-auto">
            お気軽にお問い合わせください
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <form 
            ref={formRef} 
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-sm opacity-0"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-pugeat-dark-green font-medium mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pugeat-green focus:border-transparent"
                placeholder="山田 太郎"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-pugeat-dark-green font-medium mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pugeat-green focus:border-transparent"
                placeholder="your-email@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-pugeat-dark-green font-medium mb-2">
                件名
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pugeat-green focus:border-transparent"
                placeholder="お問い合わせの件名"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-pugeat-dark-green font-medium mb-2">
                メッセージ <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pugeat-green focus:border-transparent"
                placeholder="お問い合わせ内容をご記入ください"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary inline-flex items-center justify-center min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    送信中...
                  </>
                ) : (
                  '送信する'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

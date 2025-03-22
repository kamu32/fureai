
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (headingRef.current) observer.observe(headingRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-pugeat-dark-green text-white relative overflow-hidden"
    >
      {/* 装飾要素 */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full"></div>
      
      {/* 猫・犬のシルエット装飾 */}
      <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17,12C17,14.76 14.76,17 12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9M8,5.6V4C8,3.45 8.45,3 9,3C9.55,3 10,3.45 10,4V5.6C10.3,5.55 10.65,5.5 11,5.5V4C11,3.45 11.45,3 12,3C12.55,3 13,3.45 13,4V5.5C13.35,5.5 13.7,5.55 14,5.6V4C14,3.45 14.45,3 15,3C15.55,3 16,3.45 16,4V5.6C18,6.07 19.5,7.53 20,9.5H4C4.5,7.53 6,6.07 8,5.6M2,11V20C2,21.1 2.9,22 4,22H20C21.1,22 22,21.1 22,20V11H2Z"></path>
        </svg>
      </div>
      
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18,4C16.29,4 15.25,4.33 14.65,4.61C13.88,4.23 13,4 12,4C11,4 10.12,4.23 9.35,4.61C8.75,4.33 7.71,4 6,4C3,4 1,12 1,14C1,14.83 2.32,15.59 4.14,15.9C4.78,18.14 7.8,19.85 11.5,20V15.72C10.91,15.35 10,14.7 10,14C10,13 12,13 12,13C12,13 14,13 14,14C14,14.7 13.09,15.35 12.5,15.72V20C16.2,19.85 19.22,18.14 19.86,15.9C21.68,15.59 23,14.83 23,14C23,12 21,4 18,4M4.15,13.87C3.65,13.75 3.26,13.61 3,13.5C3.25,10.73 5.2,6.4 6,6C6.76,6 7.41,6.19 7.81,6.37C6.22,8.1 4.8,11.05 4.15,13.87M20,13.5C19.74,13.61 19.35,13.75 18.85,13.87C18.2,11.05 16.78,8.1 15.19,6.37C15.59,6.19 16.24,6 17,6C17.8,6.4 19.75,10.73 20,13.5Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 
          ref={headingRef} 
          className="text-3xl md:text-4xl font-bold mb-6 opacity-0"
        >
          お気軽にお問い合わせください。
        </h2>
        <p 
          ref={textRef} 
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          気になること、疑問がございましたら、
          <br className="hidden md:block" />
          お気軽にお問い合わせください。
        </p>
        <div 
          ref={buttonRef} 
          className="opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          <Link 
            to="/contact" 
            className="bg-white text-pugeat-dark-green px-8 py-4 rounded-full font-medium hover:bg-pugeat-green hover:text-white transition-colors duration-300 inline-block"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

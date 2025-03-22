
import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import ServiceSection from '../components/Home/ServiceSection';
import NewsSection from '../components/Home/NewsSection';
import ContactSection from '../components/Home/ContactSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Hero />
      <ServiceSection />
      <NewsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;

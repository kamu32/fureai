
import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import HomePage from '../components/Home/HomePage';
import ServiceSection from '../components/Home/ServiceSection';
import NewsSection from '../components/Home/NewsSection';
import ContactSection from '../components/Home/ContactSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HomePage />
      <ServiceSection />
      <NewsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;

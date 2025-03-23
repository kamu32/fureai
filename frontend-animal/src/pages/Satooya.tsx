import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import SatooyaTop from '../components/Satooya/satooya-top';
import SatooyaList from '@/components/Satooya/satooya-list';

const Satooya = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <SatooyaTop />
            <SatooyaList/>
        </Layout>
    );
};

export default Satooya;

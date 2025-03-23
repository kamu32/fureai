import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import ShopListTop from '../components/Stores/ShopListTop';

const Satooya = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <ShopListTop/>
        </Layout>
    );
};

export default Satooya;
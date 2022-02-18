import React from 'react';
import HeaderDetails from '../components/DetailsService/HeaderDetails';
import SectionDetailsService from '../components/DetailsService/SectionDetailsService';
import NavBar from '../components/Navbar';
import Layout from '../layouts/other';

const detailsService = () => {
    return (
        <Layout>
            <header>
                <NavBar />
            </header>
            <main>
                <HeaderDetails />
                <SectionDetailsService />
            </main>
        </Layout>
    );
};

export default detailsService;

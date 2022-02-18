import styles from '../styles/Home.module.css';
import React from 'react';
import NavBar from '../components/Navbar';
import Slider from '../components/Home/Carousel';
import SectionFly from '../components/Home/SectionFly';
import SectionService from '../components/Home/SectionService';
import SectionTourisme from '../components/Home/SectionTourism';
import SectionCar from '../components/Home/SectionCar';
import SectionWhoAreWe from '../components/Home/SectionWhoAreWe';
import SectionWhyUs from '../components/Home/SectionWhyUs';
import CustomerReviews from '../components/Customer';
import SectionPartenaire from '../components/SectionPartenaire';
import Layout from '../layouts/home';
import useRedux from '../hooks/useRedux';

export async function getStaticProps() {
    const id = `620a413e7f4a75a766f3c087`;
    const destinationService = `620a6ceaa1f04166189e5b7c`;
    const locationService = '620a6d48a1f04166189e5b82';
    const tourismeService = '620a6d9da1f04166189e5b8e';

    const res = await fetch(`https://itm-all.herokuapp.com/entite/${id}`);
    const responseService = await fetch(
        `https://itm-all.herokuapp.com/admin/sousServices/service/${destinationService}`
    );
    const responseServiceLocation = await fetch(
        `https://itm-all.herokuapp.com/admin/sousServices/service/${locationService}`
    );

    const responseServiceTourisme = await fetch(
        `https://itm-all.herokuapp.com/admin/sousServices/service/${tourismeService}`
    );

    const entite = await res.json();
    const destinations = await responseService.json();
    const locations = await responseServiceLocation.json();
    const tourismes = await responseServiceTourisme.json();
    console.log(tourismes);

    return {
        props: {
            entite,
            destinations,
            locations,
            tourismes
        },
        revalidate: 60 * 60
    };
}

export default function Home({
    entite: { entites },
    destinations: { sousServices },
    locations,
    tourismes
}) {
    const { SetServices, SetEntite, Entite, Services } = useRedux();

    React.useEffect(() => {
        SetServices(entites.services);
        SetEntite(entites);
    }, []);
    React.useEffect(() => {}, [Entite, Services]);
    return (
        <>
            <Layout title={'Venids voyage'} slogant={entites.slogant} services={entites.services}>
                <header>
                    <NavBar services={entites.services} />
                </header>
                <main className={`${styles.bg}`}>
                    <Slider events={entites.events} />
                    <SectionFly sousServices={sousServices} />
                    <SectionWhoAreWe resume={entites.resumeWhoWeAre} />
                    <SectionTourisme services={tourismes.sousServices || []} />
                    <SectionWhyUs
                        vision={entites.vision}
                        valeur={entites.valeurs}
                        mission={entites.missions}
                        but={entites.but}
                    />
                    <SectionCar services={locations.sousServices} />
                    <SectionService services={entites.services} />
                    <CustomerReviews />
                    <SectionPartenaire />
                </main>
            </Layout>
        </>
    );
}

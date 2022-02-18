import NavBar from '../../components/NavbarOther';
import RservationCard from '../../components/Rervation';
import Layout from '../../layouts/other';
import React from 'react';

export async function getStaticProps() {
    const id = `620a413e7f4a75a766f3c087`;

    const res = await fetch(`https://itm-all.herokuapp.com/services/entite/${id}`);

    const { services } = await res.json();

    return {
        props: {
            services,
            entiteId: id
        },
        revalidate: 60 * 60
    };
}
const Reservation = ({ services, entiteId }) => {
    React.useEffect(() => {
        console.log(services);
    }, [services]);
    return (
        <Layout newsLetter>
            <NavBar services={services} />
            <RservationCard services={services} entiteId={entiteId} />
        </Layout>
    );
};

export default Reservation;

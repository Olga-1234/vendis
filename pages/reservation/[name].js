import NavBar from '../../components/NavbarOther';
import RservationCard from '../../components/Rervation';
import Layout from '../../layouts/other';
import React from 'react';
import { useRouter } from 'next/router';
import useRedux from '../../hooks/useRedux';

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://itm-all.herokuapp.com/sousServices');
    const { sousServices } = await res.json();
    // Get the paths we want to pre-render based on posts
    const paths = sousServices.map((post) => ({
        params: { name: post.name }
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const id = `620a413e7f4a75a766f3c087`;
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://itm-all.herokuapp.com/sousService/name/${params.name}`);
    const { sousService } = await res.json();

    const resService = await fetch(`https://itm-all.herokuapp.com/services/entite/${id}`);
    const { services } = await resService.json();

    // Pass post data to the page via props
    return { props: { sousService, services, entiteId: id } };
}
const Reservation = ({ sousService, services, entiteId }) => {
    const Router = useRouter();
    const { Entite } = useRedux();
    const { name } = Router.query;
    React.useLayoutEffect(() => {}, []);
    return (
        <Layout newsLetter>
            <NavBar services={services || []} />
            <RservationCard
                services={[sousService.service]}
                sousService={sousService}
                entiteId={entiteId}
                name={name}
                image={sousService.images[0]}
            />
        </Layout>
    );
};

export default Reservation;

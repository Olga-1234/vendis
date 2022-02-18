import Layout from '../../layouts/other';
import CardVol from '../../components/Cards/Vol';
import NavBar from '../../components/NavbarOther';
import DestinationSearchBar from '../../components/DestinationSearchBar';
export default function About() {
    return (
        <Layout title="apropos de nous">
            <NavBar />
            <DestinationSearchBar />
            <div className="col-12 row row-cols-1 row-cols-sm-2 justify-content-between row-cols-md-3">
                <CardVol />
                <CardVol />
                <CardVol />
                <CardVol />
                <CardVol />
                <CardVol />
                <CardVol />
                <CardVol />
                <CardVol />
            </div>
        </Layout>
    );
}

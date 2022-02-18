import Layout from '../layouts/other';
import NavBar from '../components/NavbarOther';
import BanniereAbout from '../components/About/BanniereABout';
import SectionWhoAreWeAbout from '../components/About/SectionAboutWhoAreWe';
import SectionAboutOurMission from '../components/About/SectionAboutOurMission';
import SectionAboutOurTeam from '../components/About/SectionAboutOurTeam';
import CustomerReviews from '../components/Customer';
import SectionPartenaire from '../components/SectionPartenaire';
export default function About() {
    return (
        <Layout title="apropos de nous">
            <NavBar />
            <section className="py-5 mt-5 d-flex flex-wrap justify-content-center">
                <h1 className=" col-12 mt-5 text-center fw-bold ">Apropos de nous </h1>
                <p className="pb-0  pt-3 text-center col-6">
                    VENDIS VOYAGE, est une agence de Voyage opérant en République Démocratique du
                    Congo, fournissant des solutions dans la mise à disposition des billets
                    nationaux et internationaux pour les entreprises et les particuliers sur toute
                    l'étendue du Pays.
                </p>
            </section>
            <BanniereAbout />
            <SectionWhoAreWeAbout />
            <SectionAboutOurMission />
            <SectionAboutOurTeam />
            <CustomerReviews />
            <div className=" col-12 ">
                <SectionPartenaire />
            </div>
        </Layout>
    );
}

import CardService from '../../Cards/Service';
import style from './style.module.css';

const SectionWhoAreWeAbout = () => {
    return (
        <section className={`${style.Container} py-2 col-11 d-flex flex-wrap`}>
            <div className="col-md-5 col-12  px-4">
                <h1 className="fw-bold pt-5 ">Voyagez l'Esprit Tranquille !</h1>
            </div>
            <div className="col-md-7  col-12">
                <h2 className=" pb-2 pt-5  fw-bold ">Qui somme nous ?</h2>
                <p className="py-2">
                    VenDis SARL est une entreprise spécialisée dans la Vente et Distribution des
                    produits et services. Créée par Monsieur Sylva Monga, VenDis SARL a pour
                    vocation de fournir des solutions d’affaires les plus novatrices et de haut
                    standard.
                </p>
                <p className="py-2">
                    Basé en République Démocratique du Congo, avec des répresentations dans 7 pays
                    en Afrique, nous distribuons plusieurs produits et services dans les secteurs en
                    croissance et à fort potentiels de développement - Produits de grande
                    consommation, Télécom, Automobile, Banque, Brasserie, Santé, Voyage, Assurances
                    -.
                </p>
                <p className="py-2">
                    {' '}
                    Possédant une équipe de commerciaux experimentés et bien formés, un charroi
                    automobile consistant, à travers des analyses et stratégies minitieuses, nous
                    sommes à même de vous accompagner vers l'atteinte de vos objectifs commerciaux.
                </p>
            </div>
        </section>
    );
};

export default SectionWhoAreWeAbout;

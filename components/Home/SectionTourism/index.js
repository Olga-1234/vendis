import CardTourism from '../../Cards/Tourism';
import pirogue from '../../../assets/pirogue.jpeg';
import Goma from '../../../assets/goma.jpeg';
import Usa from '../../../assets/usa.jpeg';

const SectionTourisme = ({ services }) => {
    return (
        <section className="container album py-3 d-flex justify-content-center flex-wrap col-12">
            <h1 className="text-center col-12 pt-5  fw-bold">Tourisme</h1>
            <p className="text-center col-md-6  pb-5">
                Vendis Voyage votre allie de taille pour organiser vos deplacements touristiques en
                republique du Congo, en Afrique et en Europe
            </p>
            <div className="col-12 row row-cols-1 row-cols-sm-2 justify-content-between row-cols-md-3 ">
                <CardTourism
                    src={services[0].images[0]}
                    pays={services[0].pays}
                    capital={services[0].name}
                    details="reserver"
                />
                <CardTourism
                    src={services[1].images[0]}
                    pays={services[1].pays}
                    capital={services[1].name}
                    details="reserver"
                />
                <CardTourism
                    src={services[2].images[1]}
                    pays={services[2].pays}
                    capital={services[2].name}
                    details="reserver"
                />
            </div>
        </section>
    );
};

export default SectionTourisme;

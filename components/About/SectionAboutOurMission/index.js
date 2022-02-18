import CardService from '../../Cards/Service';
import style from './style.module.css';
import traveling from '../../../assets/Growing-bro.svg';
import Image from 'next/image';
const SectionAboutOurMission = () => {
    return (
        <section className={`${style.Container} col-11 py-5 `}>
            <h1 className="fw-bold text-sm-left py-2">Notre Mission</h1>
            <p className="py-2">
                VenDis SARL est une entreprise spécialisée dans la Vente et Distribution des
                produits et services.
            </p>
            <div className="col-12 d-flex justify-content-center flex-wrap ">
                <div className={`col-md-4 col-12   relative ${style.Image}`}>
                    <Image src={traveling} layout="responsive" />
                </div>
                <div className="col-md-7 col-12 d-flex flex-wrap">
                    <div className="d-flex align-items-center justify-content-center col-md-6  col-12">
                        <div
                            className={` d-flex row align-items-center px-4   border ${style.CardBig}`}
                        >
                            <h2 className="fw-bold">But</h2>
                            <p className="">
                                {' '}
                                Offrir des services uniques à nos voyageurs dans le but de les
                                accompagner en as surant de façon efficace des procédures et
                                formalités liées au Voyage.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 d-flex flex-wrap align-items-center justify-content-center">
                        <div
                            className={` d-flex row align-items-center px-4 col-md-pt-2  border ${style.Card}`}
                        >
                            <h2 className="fw-bold">Vision</h2>
                            <p>
                                VenDis Voyage se veut d'être votre Partenaire de premier choix de
                                Voyage
                            </p>{' '}
                        </div>
                        <div
                            className={` d-flex row align-items-center px-4 col-md-pt-2  border ${style.Card}`}
                        >
                            <h2 className="fw-bold">Valeurs</h2>
                            <p>Culture des résultats Professionnalisme Loyauté Intégrité</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionAboutOurMission;

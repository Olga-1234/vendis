import style from './style.module.css';
import assurancevoyage from '../../../assets/assuranceS.jpeg';
import assuranceVoyageService from '../../../assets/assuranceVoyageService.jpeg';
import billetservice from '../../../assets/billetservice.jpeg';
import covidtexst19 from '../../../assets/covidtexst19.jpeg';
import locationvoitureService from '../../../assets/locationvoitureService.jpeg';
import protocoleservice from '../../../assets/assisatanceprotocole.jpeg';
import tourismeservice from '../../../assets/toury.jpeg';
import transportservice from '../../../assets/chauffeur.jpeg';
import visa from '../../../assets/visa.jpeg';
import Image from 'next/image';
const SectionAboutOurTeam = () => {
    return (
        <section
            className={`${style.Container} d-flex flex-wrap  justify-content-center col-11 py-3`}
        >
            <h1 className="fw-bold text-center py-2 col-12 ">Nos Services</h1>
            <p className="py-2">
                VenDis SARL est une entreprise spécialisée dans la Vente et Distribution des
                produits et services.
            </p>
            <div className="col-11 py-3 d-flex justify-content-center flex-wrap ">
                <div className={`${style.Card} col-md-4  col-11`}>
                    <div className={`${style.ContainerCard} `}>
                        <Image src={billetservice} layout="fill" />
                        <div className={`${style.Hover}`}>
                            <div className={`${style.ContainerRsocial}`}>
                                <div className="d-flex row     justify-content-center">
                                    {' '}
                                    <p className="text-center">Vente billets</p>
                                    <p className={`${style.styledbutton} fw-bold text-center `}>
                                        voir plus
                                    </p>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.Card} col-md-4 col-11`}>
                    <div className={`${style.ContainerCard} `}>
                        <Image src={tourismeservice} layout="fill" />

                        <div className={`${style.Hover}`}>
                            <div className={`${style.ContainerRsocial}`}>
                                <div className="d-flex row     justify-content-center">
                                    {' '}
                                    <p className="text-center">Visite touristique</p>
                                    <p className={`${style.styledbutton} fw-bold text-center `}>
                                        voir plus
                                    </p>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.Card} col-md-4 col-11`}>
                    <div className={`${style.ContainerCard} `}>
                        <Image src={protocoleservice} layout="fill" />

                        <div className={`${style.Hover}`}>
                            <div className={`${style.ContainerRsocial}`}>
                                <div className="d-flex row     justify-content-center">
                                    <p className="text-center">Assistance protocole</p>
                                    <p className={`${style.styledbutton} fw-bold text-center `}>
                                        voir plus
                                    </p>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.Card} col-md-4 col-11`}>
                    <div className={`${style.ContainerCard} `}>
                        <Image src={visa} layout="fill" />

                        <div className={`${style.Hover}`}>
                            <div className={`${style.ContainerRsocial}`}>
                                <div className="d-flex row     justify-content-center">
                                    {' '}
                                    <p className="text-center">Facilitation visa</p>
                                    <p className={`${style.styledbutton} fw-bold text-center `}>
                                        voir plus
                                    </p>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{' '}
                <div className={`${style.Card} col-md-4 col-11`}>
                    <div className={`${style.ContainerCard} `}>
                        <Image src={transportservice} layout="fill" />

                        <div className={`${style.Hover}`}>
                            <div className={`${style.ContainerRsocial}`}>
                                <div className="d-flex row     justify-content-center">
                                    {' '}
                                    <p className="text-center">Transport</p>
                                    <p className={`${style.styledbutton} fw-bold text-center `}>
                                        voir plus
                                    </p>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{' '}
                <div className={`${style.Card} col-md-4 col-11`}>
                    <div className={`${style.ContainerCard} `}>
                        <Image src={assurancevoyage} layout="fill" />

                        <div className={`${style.Hover}`}>
                            <div className={`${style.ContainerRsocial}`}>
                                <div className="d-flex row     justify-content-center">
                                    {' '}
                                    <p className="text-center">Assurance</p>
                                    <p className={`${style.styledbutton} fw-bold text-center `}>
                                        voir plus
                                    </p>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.Card} col-md-4 col-11`}>
                    <div className={`${style.ContainerCard} `}>
                        <Image src={locationvoitureService} layout="fill" />

                        <div className={`${style.Hover}`}>
                            <div className={`${style.ContainerRsocial}`}>
                                <div className="d-flex row     justify-content-center">
                                    {' '}
                                    <p className="text-center">Location charroi automobile</p>
                                    <p className={`${style.styledbutton} fw-bold text-center `}>
                                        voir plus
                                    </p>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{' '}
                <div className={`${style.Card} col-md-4 col-11`}>
                    <div className={`${style.ContainerCard} `}>
                        <Image src={covidtexst19} layout="fill" />
                        <div className={`${style.Hover}`}>
                            <div className={`${style.ContainerRsocial}`}>
                                <div className="d-flex row     justify-content-center">
                                    {' '}
                                    <p className="text-center">Test Covid-19</p>
                                    <p className={`${style.styledbutton} fw-bold text-center `}>
                                        voir plus
                                    </p>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{' '}
                <div className={`${style.Card} col-md-4 col-11`}>
                    <div className={`${style.ContainerCard} `}>
                        <Image src={assuranceVoyageService} layout="fill" />

                        <div className={`${style.Hover}`}>
                            <div className={`${style.ContainerRsocial}`}>
                                <div className="d-flex row     justify-content-center">
                                    {' '}
                                    <p className="text-center">
                                        Assurance santé internationale et évacuation
                                    </p>
                                    <p className={`${style.styledbutton} fw-bold text-center `}>
                                        voir plus
                                    </p>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionAboutOurTeam;

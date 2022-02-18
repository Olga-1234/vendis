import Image from 'next/image';
import avatar from '../../../assets/avatarH.jpeg';
import style from './style.module.css';
import detailVoyage from '../../../assets/detailsVoyage.jpeg';
import AfriqueDuSud from '../../../assets/afriqueSuSud.jpeg';
import kinshasa from '../../../assets/kinshasa.jpeg';
import dubai from '../../../assets/dubai.jpeg';
import brazil from '../../../assets/BRESIL.jpeg';
import canada from '../../../assets/canada.jpeg';
import paris from '../../../assets/parisTourism.jpeg';

import afroWomen from '../../../assets/afrotourism.jpeg';
import safarie from '../../../assets/safarie.jpeg';
import tourismecouple from '../../../assets/tourismecouple.jpeg';
import CustomerReviews from '../../Customer';
import CardTourism from '../../Cards/Tourism';
import dubaiTourisme from '../../../assets/dubaiTourisme.jpeg';
import turkey from '../../../assets/turqy.jpeg';
import jeuneHomme from '../../../assets/jeuneHomme.jpeg';
import tanzanie from '../../../assets/tazanie.jpeg';
import CardPromotion from '../../Cards/Promotion';

const SectionDetailsService = () => {
    return (
        <section className=" pt-5 container">
            <h1 className={`fw-bold py-5 ${style.sm}`}>Vente Billet</h1>

            <div className={`d-flex  justify-content-between ${style.repensiveArticle}`}>
                <article className={`col-8 ${style.sm} `}>
                    <p className="h5 lh-base pb-3">
                        {' '}
                        Notre service est disponible 24 H/24 pour vous fournir des billets d'avions
                        ( nationaux et internationaux) à un prix défiant toute concurrence
                        accompagné de plusieurs avantages
                    </p>
                    <Image
                        src={detailVoyage}
                        height=""
                        width=""
                        className={`  rounded `}
                        alt="image homme embarquant"
                    />
                    <p className="pt-3 h5 lh-base">
                        Notre équipe met à votre disposition le serice de Transport, qui viendra
                        vous chercher de la maison à l'aéroport et de l'aéroport à votre lieu de
                        résidence.
                    </p>
                    <div className={`col-12 d-flex ${style.rowSm} `}>
                        <div className={`col-6 ${style.p} ${style.img2} `}>
                            <Image
                                alt="image tourrsite"
                                src={afroWomen}
                                className={`rounded-start ${style.p}`}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            />
                            <div className={`${style.overlay}`}>
                                <h1 className={`${style.text} fw-bolder`}>
                                    Des Vacances des reves
                                </h1>
                            </div>
                        </div>

                        <div className={`col-6 d-flex row ${style.p}`}>
                            <div className={`col-12 ${style.p}  ${style.img}`}>
                                {' '}
                                <Image
                                    alt="image tourrsite"
                                    src={safarie}
                                    className=" rounded-end"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                />
                                <div className={`${style.overlay}`}>
                                    <h1 className={`${style.text} fw-bolder`}>Safarie</h1>
                                </div>
                            </div>
                            <div className={`col-12 ${style.p} ${style.img}`}>
                                {' '}
                                <Image
                                    alt="image tourrsite"
                                    src={tourismecouple}
                                    className=" rounded-end"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                />
                                <div className={`${style.overlay}`}>
                                    <h1 className={`${style.text} fw-bolder`}>Lune de miel</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <aside className={`${style.SmPadding} col-lg-3`}>
                    <div className="pb-5">
                        <div
                            className={`d-flex pb-4  justify-content-around ${style.SmJustifyContentBetween}`}
                        >
                            <Image
                                src={avatar}
                                width="92"
                                height="50"
                                alt="avatar"
                                className={` rounded-circle `}
                            />

                            <div className={`${style.paddingLeft}`}>
                                <p className="h3 fw-bold ">Pierre Benoit</p>
                                <p className={`fw-bold ${style.fontSize}`}>
                                    Chef d'entreprise <br />
                                    Temoigne de son avanture
                                </p>
                            </div>
                        </div>
                        <h2 className="mx-4 pb-2 h5  fw-bold">Nos Service</h2>
                        <ul className="mx-4 h6 lh-lg">
                            <li>Facilitation Visa</li>
                            <li>Assurance Sante Internationale et Evacuation </li>
                            <li>Assurance Voyage</li>
                            <li>Transport</li>
                            <li>Assistance Protocole</li>
                            <li>Location Charroi automobile</li>
                            <li>Visite touristique</li>
                            <li>Test Covid-19</li>
                        </ul>

                        <h3 className="mx-4 py-4 h5 fw-bold">Destinations populaires</h3>
                        <div className="mx-4 pb-5 ">
                            <div className="d-flex">
                                {' '}
                                <Image
                                    src={AfriqueDuSud}
                                    height="70"
                                    width="70"
                                    className="col-3  border rounded "
                                    alt="image afrique du sud"
                                />{' '}
                                <div
                                    className={`col-9 d-flex justify-content-between align-items-center  ${style.paddingLeft}`}
                                >
                                    <p className={`fw-bold ${style.fontSize}`}> Afrique du Sud</p>
                                    <p
                                        className={`border rounded border-success text-center p-2   ${style.btnReserver}`}
                                    >
                                        Reserver
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex py-1">
                                {' '}
                                <Image
                                    src={kinshasa}
                                    height="70"
                                    width="70"
                                    className=" col-3 border rounded"
                                    alt="kinshasa"
                                />
                                <div
                                    className={` col-9 d-flex justify-content-between align-items-center  ${style.paddingLeft}`}
                                >
                                    <p className={`fw-bold ${style.fontSize} `}>Kinshasa</p>
                                    <p
                                        className={`border rounded border-success text-center p-2 ${style.btnReserver}`}
                                    >
                                        Reserver
                                    </p>
                                </div>
                            </div>
                            <div className={`d-flex py-1 ${style.hover}`}>
                                {' '}
                                <Image
                                    src={dubai}
                                    height="70"
                                    width="70"
                                    className="col-3  border rounded"
                                    alt="image dubai"
                                />
                                <div
                                    className={`  col-9 d-flex justify-content-between align-items-center ${style.paddingLeft}`}
                                >
                                    <p className={`fw-bold ${style.fontSize}`}>Dubai</p>
                                    <p
                                        className={`border rounded border-success text-center p-2 ${style.btnReserver}`}
                                    >
                                        Reserver
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex py-1">
                                {' '}
                                <Image
                                    src={canada}
                                    height="70"
                                    width="70"
                                    className="border rounded"
                                    alt="image canada"
                                />
                                <div
                                    className={` col-9 d-flex justify-content-between  align-items-center ${style.paddingLeft}`}
                                >
                                    <p className={`fw-bold ${style.fontSize}`}> Canada</p>
                                    <p
                                        className={`border rounded border-success text-center p-2 ${style.btnReserver}`}
                                    >
                                        Reserver
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex">
                                {' '}
                                <Image
                                    src={brazil}
                                    height="70"
                                    width="70"
                                    className="  border rounded"
                                    alt="image brezil"
                                />
                                <div
                                    className={` col-9 d-flex justify-content-between align-items-center  ${style.paddingLeft}`}
                                >
                                    <p className={` ${style.fontSize} fw-bold`}> Bresil</p>
                                    <p
                                        className={`border rounded border-success text-center p-2 ${style.btnReserver}`}
                                    >
                                        Reserver
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={` ${style.positionRelative} `}>
                        <div className={` ${style.after} text-light fw-bold `}>
                            <p>
                                {' '}
                                Offre Spéciale <br /> -50% <br /> Paris-Kinshasa{' '}
                            </p>
                        </div>
                        <Image
                            alt="image tourrsite"
                            src={paris}
                            className={` `}
                            width=""
                            height=""
                        />
                    </div>
                </aside>
            </div>
            <h2 className="fw-bold py-4">Autres Destinations</h2>

            <div className="row row-cols-2 py-4 row-cols-sm-2  justify-content-between row-cols-md-4 g-2">
                <CardPromotion
                    pays="Emirats arabe-unis"
                    capital="Dubai"
                    details="reserver"
                    src={dubaiTourisme}
                />
                <CardPromotion pays="Tanzanie" capital="Tanga" details="reserver" src={tanzanie} />
                <CardPromotion pays="Rwanda" capital="Kigali" details="reserver" src={jeuneHomme} />
                <CardPromotion pays="Turquie" capital="Istanboul" details="reserver" src={turkey} />
            </div>
            <CustomerReviews />
        </section>
    );
};

export default SectionDetailsService;

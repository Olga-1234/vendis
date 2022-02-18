/* eslint-disable jsx-a11y/aria-proptypes */
import Image from 'next/image';
import brasil from '../../../assets/BRESIL.jpeg';
import venteBillet from '../../../assets/venteBillet.jpeg';
import transport from '../../../assets/transport.jpeg';
import tourisme from '../../../assets/tourismeS.jpeg';
import locationvoiture from '../../../assets/locationvoiture.jpeg';
import facilitationvisa from '../../../assets/passporT.jpeg';
import assistanceprotocole from '../../../assets/assisatanceprotocole.jpeg';
import covidtest from '../../../assets/covidtest.jpeg';

import valise from '../../../assets/vendis3.jpeg';
import style from './style.module.css';
import touriste from '../../../assets/vendisvoyage1.jpeg';
import Link from 'next/link';
const Slider = ({ events }) => (
    <div className={`${style.width} mb-4`}>
        <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-indicators">
                {events.map((event, index) => {
                    const compteur = index + 1;
                    if (index == 0)
                        return (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={`${index}`}
                                className="active"
                                aria-current="true"
                                aria-label={'Slide ' + compteur}
                            ></button>
                        );
                    else
                        return (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={`${index}`}
                                aria-label={'Slide ' + compteur}
                            ></button>
                        );
                })}
            </div>
            <div className={`carousel-inner ${style.width}`}>
                {events.map((event, index) => {
                    if (index == 0)
                        return (
                            <div
                                key={index}
                                className={`carousel-item active  ${style.bg} ${style.width}  ${style.hover} `}
                            >
                                <Image
                                    src={event.image}
                                    alt="..."
                                    layout={'fill'}
                                    objectFit="cover"
                                    blurDataURL={event.image}
                                    placeholder="blur"
                                />
                                <div className={`${style.after}`}></div>
                                <div
                                    className={`position-absolute top-50 start-50 ${style.textCenter}`}
                                >
                                    <h6 className={`mb-3 fw-bold ${style.littleTitle}`}>
                                        {event.description}
                                    </h6>
                                    <h1 className={`text-light mb-5 ${style.title}`}>
                                        {event.titre}
                                    </h1>
                                    <Link href={'/'} passHref>
                                        <a className={`${style.btnCenter} `}>EN SAVOIR +</a>
                                    </Link>
                                </div>
                            </div>
                        );
                    else
                        return (
                            <div
                                key={index}
                                className={`carousel-item   ${style.bg} ${style.width}  ${style.hover} `}
                            >
                                <Image
                                    src={event.image}
                                    alt="..."
                                    layout={'fill'}
                                    objectFit="cover"
                                    blurDataURL={event.image}
                                    placeholder="blur"
                                />
                                <div className={`${style.after}`}></div>
                                <div
                                    className={`position-absolute top-50 start-50 ${style.textCenter}`}
                                >
                                    <h6 className={`mb-3 fw-bold ${style.littleTitle}`}>
                                        {event.description}
                                    </h6>
                                    <h1 className={`text-light mb-5 ${style.title}`}>
                                        {event.titre}
                                    </h1>
                                    <Link href={'/'} passHref>
                                        <a className={`${style.btnCenter} `}>EN SAVOIR +</a>
                                    </Link>
                                </div>
                            </div>
                        );
                })}
            </div>
            <button
                className={`carousel-control-prev ${style.carouselbtn}`}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className={`fw-bold ${style.directionTextLeft}`}>Previous</span>
            </button>
            <button
                className={`carousel-control-next ${style.carouselbtn}`}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className={` fw-bold ${style.directionTextRight}`}>Next</span>
                <span
                    className={`carousel-control-next-icon ${style.directionIcon}`}
                    aria-hidden="true"
                ></span>
            </button>
        </div>
    </div>
);

export default Slider;

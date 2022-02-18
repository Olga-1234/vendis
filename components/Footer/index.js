import style from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/LogoVendisVoyage2.png';
import envelope from '../../assets/envelope.svg';
import map from '../../assets/map2.svg';

import * as React from 'react';
import Box from '@mui/material/Box';

export default function Footer({ slogant }) {
    return (
        <section className={`${style.Container} bg-light px-sm-5 px-2`}>
            <div className="col-sm-4 col-12 ">
                <div>
                    <Link
                        href="/"
                        className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
                    >
                        <a>
                            <Image src={Logo} width="200" height="100" alt="Logo vendis voyage" />
                        </a>
                    </Link>
                </div>
                <p className="px-sm-0 px-4  ">{slogant}</p>
                <div className="py-sm-1   py-0 px-sm-0 px-3 ">
                    <i className={` ${style.color}  fab fa-twitter-square`}></i>
                    <i className={` ${style.color} fab fa-linkedin`}></i>
                    <i className={`${style.color} fab fa-facebook-square`}></i>
                    <i className={` ${style.color} fab fa-instagram`}></i>
                </div>
            </div>
            <div className="col-sm-4 col-12 d-flex flex-wrap align-items-center">
                <div className="py-sm-4 py-3  px-sm-4 px-3 ">
                    <div className="d-flex align-items-center  py-3">
                        <Image
                            src={envelope}
                            height=""
                            width=""
                            className={`${style.pl} `}
                            alt="image-mail"
                        />

                        <a href="mailto:vendisvoyage@gmail.com">vendisvoyage@gmail.com</a>
                    </div>
                    <div className={`d-flex align-items-center py-3`}>
                        <Image
                            src={map}
                            height=""
                            width=""
                            className={`${style.pl} `}
                            alt="image-map"
                        />

                        <a href="mailto:vendisvoyage@gmail.com">vendisvoyage@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 col-12  d-flex align-items-center ">
                <div className="py-sm-4 py-3 px-sm-4 px-3 ">
                    <ul className={` col-12 col-lg-auto mt-2 mb-3 mb-lg-2 ${style.listeStyle}`}>
                        <li>Accueil</li>
                        <li>Services</li>
                        <li>A Propos de Nous</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

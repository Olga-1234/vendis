import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/LogoVendisVoyage2.png';

import style from './style.module.css';

import * as React from 'react';

const NavBar = ({ services }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <nav className={` ${style.positionAbsolute} `}>
            <div className="container d-flex justify-content-end align-items-center">
                <ul className="nav d-flex align-items-center">
                    <Link href="/reservation" passHref>
                        <li className="nav-item">
                            <a className={`nav-link px-4 fw-bold ${style.hover}`}>RESERVATION</a>
                        </li>
                    </Link>

                    <li className="nav-item">
                        <a
                            href="#gh"
                            className={`nav-link px-4 fw-bold ${style.telephone} ${style.link} `}
                        >
                            +243 82 00 00 000
                        </a>
                    </li>
                </ul>
            </div>

            <div className=" mb-4 ">
                <div
                    className={` d-flex justify-content-between align-items-center ${style.navigation}`}
                >
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
                    >
                        <Image src={Logo} width="200" height="100" alt="Logo vendis voyage" />
                    </a>
                    <ul className={`nav col-12 col-lg-auto mt-2 mb-3 mb-lg-2 ${style.Navigation}`}>
                        <li className="nav-item">
                            <a
                                href="#ACCUEIL"
                                className={`nav-link px-4 h6  fw-bold ${style.link}`}
                            >
                                Accueil
                            </a>
                        </li>

                        <Link href="/detailsService ">
                            <li className={`${style.li}  nav-item`}>
                                <a
                                    href="#SERVICES"
                                    className={`nav-link px-4 text-light  ${style.link} h6 fw-bold`}
                                >
                                    Services
                                </a>
                                <ul className={style.ul}>
                                    {/* {services.map((item) => (
                                        <li className={style.li2}>{item.name}</li>
                                    ))} */}
                                </ul>
                            </li>
                        </Link>

                        <li className="nav-item">
                            <Link href="/aproposdenous">
                                <a
                                    href="# A PROPOS DE NOUS"
                                    className={`nav-link px-4 h6 fw-bold ${style.link}`}
                                >
                                    A Propos De Nous
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/contact">
                                <a
                                    href="#CONTACT"
                                    className={`nav-link px-4  h6 fw-bold ${style.link}`}
                                >
                                    Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

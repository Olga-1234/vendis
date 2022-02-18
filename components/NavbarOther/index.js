import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/bg-removebg-preview.png';
import style from './style.module.css';

const NavBarOther = () => {
    return (
        <nav className={`${style.header}`}>
            <a href="/" className={` ${style.logo} `}>
                <Image src={Logo} width="200" height="100" alt="Logo vendis voyage" />
            </a>

            <input className={`${style.menubtn}`} type="checkbox" id="menu-btn" />
            <label className={`${style.menuicon}  `} for="menu-btn">
                <span class={`${style.navicon} `}></span>
            </label>
            <ul className={style.menu}>
                <li className="">
                    <Link href="/" passHref>
                        <a className={`nav-link px-4 h6  fw-bold ${style.link}`}>Accueil</a>
                    </Link>
                </li>
                <li className="">
                    <a href="#SERVICES" className={`nav-link px-4 h6 fw-bold ${style.link}`}>
                        Services
                    </a>
                </li>
                <li className="nav-item">
                    <Link href="/aproposdenous" passHref>
                        <a className={`nav-link px-4 h6 fw-bold ${style.link}`}>A Propos De Nous</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/contact" passHref>
                        <a className={`nav-link px-4  h6 fw-bold ${style.link}`}>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBarOther;

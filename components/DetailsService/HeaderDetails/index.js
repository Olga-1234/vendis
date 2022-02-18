import Image from 'next/image';
import style from './style.module.css';
import bg from '../../../assets/monde4.svg';
import useFetch from 'react-fetch-hook';
import moment from 'moment';
import facebook from '../../../assets/facebook.svg';
import instagram from '../../../assets/instagram.svg';
import twitter from '../../../assets/twitter.svg';
import linkedin from '../../../assets/linkedin.svg';

const HeaderDetails = () => {
    const { data } = useFetch('https://randomuser.me/api/');
    console.log(data, 'la date ');

    let now = moment().format('lll');

    return (
        <header className={` d-flex justify-content-center ${style.bg}  `}>
            {/* <Image src={bg} width="1400" height="600" className={``} alt="" /> */}

            <Image
                alt="image tourrsite"
                src={bg}
                className={`rounded-start ${style.p}`}
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className={`${style.after}`}></div>

            <div className={`d-flex align-items-end  ${style.positionAbsolute}`}>
                <div className=" py-5">
                    <h1 className="fw-bolder display-3 text-light pb-5">
                        {/* Voyagez l'Esprit Tranquille <br /> On S'occupons de Tout */}
                        Visite Touristique
                    </h1>

                    <p className="fw-bolder h3 pb-3 text-light">{now}</p>
                    <div className="pt-5 ">
                        <Image src={facebook} height="" width="" alt="facebook" />
                        <Image src={linkedin} height="" width="" alt="linkedin" />
                        <Image src={twitter} height="" width="" alt="tweeter" />
                        <Image src={instagram} height="" width="" alt="instagram" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderDetails;

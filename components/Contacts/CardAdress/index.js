import Image from 'next/image';
import style from './style.module.css';
import map from '../../../assets/map.svg';
import phone from '../../../assets/phone.svg';
import email from '../../../assets/email.svg';

const CardAdress = ({ src, pays, capital, adresse }) => {
    return (
        <article className={`${style.width} d-flex`}>
            <div className={` col-6  ${style.container}`}>
                <Image
                    blurDataURL={src}
                    alt="Mountains"
                    src={src}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    placeholder="blur"
                    className={`${style.image} `}
                />
            </div>
            <div className="col-6 ">
                <div className=" pt-3  ">
                    <h2 className="h2 px-3 text-start fw-bold ">{pays}</h2>{' '}
                    <adresse>
                        <div className=" d-flex px-3">
                            <Image src={map} height="" width="" alt=" image-map" />
                            <span className={` ${style.padding}`}>Adresse</span>
                        </div>

                        <p className="fw-bold col py-1 px-3">{adresse}</p>
                        <div className=" d-flex px-3">
                            <Image src={phone} height="" width="" alt=" image-phone" />
                            <span className={` ${style.padding}`}>Téléphone</span>
                        </div>
                        <p className="  col-12 py-1 px-3 ">(+243) 82 20 28 987</p>

                        <div className=" d-flex px-3">
                            <Image src={email} height="" width="" alt=" image-phone" />
                            <span className={` ${style.padding}`}>Email</span>
                        </div>
                        <p className="col-12  py-1 px-3">vendisVoyage @gmail.com</p>
                    </adresse>
                </div>
            </div>
        </article>
    );
};

export default CardAdress;

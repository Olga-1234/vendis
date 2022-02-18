import Image from 'next/image';
import bar from '../../../assets/bar.png';
import style from './style.module.css';
import Link from 'next/link';

const CardTourism = ({ src, pays, capital, details, text }) => {
    return (
        <article className={`${style.width}`}>
            <div className={`${style.container}`}>
                <Image
                    blurDataURL={src}
                    alt="Mountains"
                    src={src}
                    layout="fill"
                    objectFit="cover"
                    priority
                    quality={100}
                    placeholder="blur"
                    className={`${style.image}`}
                />
                <div className={`${style.overlay}`}>
                    <h1 className={`${style.text} fw-bold`}>{pays}</h1>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="pb-4">
                    <h2 className="h2 px-2 fw-bold ">{text}</h2>{' '}
                    <p className="fw-bold col py-1 px-2 ">{capital}</p>
                    <Link href={`/reservation/${capital}`} passHref>
                        <a className={`${style.styledbutton} ml-1 mb-3 px-3 py-2 fw-bold `}>
                            {details}
                        </a>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default CardTourism;

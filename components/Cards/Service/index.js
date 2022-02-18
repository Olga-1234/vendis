import Image from 'next/image';
import style from './style.module.css';
import service from '../../../assets/goma.jpeg';

const CardService = ({ src, service, details }) => {
    return (
        <article className={`col-md-6 col-12 mb-4 d-flex ${style.boxShadow}`}>
            <div className={`col-4 ${style.positionR}`}>
                <div className={`${style.after} ${style.borderRadius}`}></div>
                <Image
                    blurDataURL={src}
                    alt="Mountains"
                    src={src}
                    layout="fill"
                    objectFit="cover"
                    priority
                    quality={100}
                    placeholder="blur"
                    className={`${style.borderRadius}`}
                />
            </div>
            <div className="col-8 px-2 pb-3 ">
                <h2 className="fw-bold h4 pt-3">{service}</h2>
                <p className={` ${style.p} text-justify py-1 `}>{details}</p>
                <a className={`text-center px-3   py-2 fw-bold  ${style.voirplus}`}>Voir plus</a>
            </div>
        </article>
    );
};

export default CardService;

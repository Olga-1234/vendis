import Image from 'next/image';
import bar from '../../../assets/bar.png';
import style from './style.module.css';
import star from '../../../assets/star.svg';
import Link from 'next/link';
const CardDestination = ({ src, text, number, capital, ratings }) => {
    const ratingArray = [];
    for (let i = 0; i < ratings; i++) {
        ratingArray.push(i);
    }
    return (
        <article className={`${style.Container} `}>
            <div className={`${style.Image}`}>
                <Image
                    blurDataURL={src}
                    src={src}
                    alt="..."
                    layout="fill"
                    priority
                    placeholder="blur"
                />
                <div className={`${style.Overlay}`}>
                    <p className={` fw-bold ${style.Text}`}>{text}</p>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <div className="col-10 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        {' '}
                        <div className={` ${style.padding}`}>
                            <h2 className="h1">0{number}</h2>
                        </div>
                        <div className="d-flex align-items-center">
                            <Image
                                src={bar}
                                height="2"
                                width="50"
                                alt="la barre"
                                priority
                                placeholder="blur"
                            />
                        </div>
                    </div>
                    <Link href={'/reservation/' + capital} passHref>
                        <a className={` ${style.styledbutton} px-2 py-1`}>reserver</a>
                    </Link>
                </div>
                <div className="col-10 d-flex  justify-content-start ">
                    <div className={`fw-bold mx-1 ${style.Title}`}>{capital}</div>

                    <div className="d-flex align-items-center">
                        {ratingArray.map((value) => (
                            <Image src={star} key={value} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default CardDestination;

import Image from 'next/image';
import bar from '../../../assets/bar.png';
import style from './style.module.css';
import Link from 'next/link';

const CardCar = ({ src, text }) => {
    return (
        <article className={`${style.width}`}>
            <Link href={`/reservation/${text}`} passHref>
                <a className={`${style.container}`}>
                    <Image
                        blurDataURL={src}
                        alt={text}
                        src={src}
                        layout="fill"
                        objectFit="cover"
                        priority
                        placeholder="blur"
                        className={`${style.image} `}
                    />
                    <div className={`${style.overlay}`}>
                        <h1 className={`${style.text} fw-bolder`}>{text}</h1>
                    </div>
                </a>
            </Link>
        </article>
    );
};

export default CardCar;

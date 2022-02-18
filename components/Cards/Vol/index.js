import Image from 'next/image';
import src from '../../../assets/assistance.jpg';
import style from './style.module.css';
import star from '../../../assets/star.svg';
import Link from 'next/link';
export default function CardVol() {
    return (
        <article className={`col-sm-3 col-12 mb-sm-4 mb-5    ${style.Container}`}>
            <div className={`${style.Card}`}>
                <div className={`${style.Image}`}>
                    <Image
                        blurDataURL={src}
                        src={src}
                        className={`${style.image}`}
                        alt=""
                        priority
                        placeholder="blur"
                        layout="fill"
                    />
                </div>

                <div className="px-3">

                  <div className="py-5 d-flex ">  <h1 className="h4 fw-100 ">kinshasa-goma</h1>
                    <Link href='/reservation' passHref>
                        <a className={` ${style.styledbutton} px-2 py-1`}>reserver</a>
                    </Link></div>
                </div>
            </div>
        </article>
    );
}

import style from './style.module.css';
import Image from 'next/image';
import france from '../../../assets/france.jpeg';
import dubai from '../../../assets/dubai.jpeg';
import chine from '../../../assets/CHINE.jpeg';
import bar from '../../../assets/afriqueSuSud.jpeg';

export default function BanniereAbout() {
    return (
        <>
            <section className={'col-11 d-flex flex-wrap justify-content-between'}>
                <div className={`${style.BigImage}`}>
                    <Image
                        src={bar}
                        layout="fill"
                        blurDataURL={bar}
                        placeholder="blur"
                        alt="Image-lieu populaire"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <div className={`${style.Image}`}>
                    <Image
                        blurDataURL={chine}
                        src={chine}
                        layout="fill"
                        placeholder="blur"
                        alt="Image-lieu populaire"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <div className={`${style.Image}`}>
                    <Image
                        blurDataURL={france}
                        src={france}
                        layout="fill"
                        placeholder="blur"
                        alt="Image-lieu populaire"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <div className={`${style.Image}`}>
                    <Image
                        blurDataURL={dubai}
                        src={dubai}
                        layout="fill"
                        placeholder="blur"
                        alt="Image-lieu populaire"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
            </section>
        </>
    );
}

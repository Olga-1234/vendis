import style from './style.module.css';
import Image from 'next/image';
import src from '../../assets/footer.jpeg';

export default function NewsLetter() {
    return (
        <div className={` d-flex ${style.height} col-12`}>
            <div className={`col-sm-6 col-12 ${style.heightImga} ${style.Container} `}>
                <Image
                    alt="Touriste"
                    src={src}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    blurDataURL={src}
                    placeholder="blur"
                />
            </div>
            <div
                className={`col-sm-6 col-0  d-flex align-items-center ${style.Hover} justify-content-center`}
            ></div>{' '}
            <form className={`col-12 ${style.HoverText}`}>
                <h1 className={`fw-bold  text-center ${style.color} `}>NewsLetter</h1>
                <div className={`col-12 d-flex justify-content-center `}>
                    <input
                        type="email"
                        name="email"
                        placeholder="inscris toi a la newsletter"
                        required
                    />
                    <button className="px-3">></button>
                </div>
            </form>
        </div>
    );
}

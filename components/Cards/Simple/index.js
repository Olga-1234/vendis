import Image from 'next/image';
import bar from '../../../assets/bar.png';
import style from './style.module.css';

const CardSimple = ({ src, text }) => {
    return (
        <div className={`${style.width}`}>
            <div className={`${style.container}`}>
                <Image
                    blurDataURL={src}
                    src={src}
                    width="300"
                    className={`${style.image}`}
                    height="200"
                    priority
                    alt=""
                    placeholder="blur"
                />
                <div className={`${style.overlay}`}>
                    <h1 className={`${style.text}`}>{text}</h1>
                </div>
            </div>
        </div>
    );
};

export default CardSimple;

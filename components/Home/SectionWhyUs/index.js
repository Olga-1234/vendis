import style from './style.module.css';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import butImage from '../../../assets/but.svg';
import missionImage from '../../../assets/mision.svg';
import visionImage from '../../../assets/vision.svg';
import valeurImage from '../../../assets/valeur.svg';
import Image from 'next/image';

const SectionWhyUs = ({ mission, vision, but, valeur }) => {
    return (
        <section className="container py-5">
            <h1 className="fw-bold text-center py-5 mb-4">Pourquoi Nous Choisir ?</h1>
            <div
                className={`col-12 ${style.dflexCenter}  row row-cols-1 py-4 row-cols-sm-1  justify-content-between row-cols-lg-4 row-cols-md-2 g-2`}
            >
                <div
                    className={`d-flex row justify-content-center pt-3 align-items-start ${style.marginBottom}  ${style.colorGreen}`}
                >
                    <div className="d-flex row justify-content-center">
                        <Image src={visionImage} />
                        <h2 className="fw-bold  text-center pt-1 ">Vision</h2>
                    </div>
                    <p className="text-center">{vision}</p>
                </div>
                <div
                    className={`"d-flex py-3 row justify-content-center align-items-star ${style.marginBottom}  ${style.colorGreen}`}
                >
                    <Image className={`col-4 `} src={butImage} />

                    <h2 className="fw-bold text-center  pt1 ">But</h2>
                    <p className="text-center ">{but}</p>
                </div>
                <div
                    className={`d-flex row py-3 justify-content-center ${style.marginBottom}  ${style.colorGreen} `}
                >
                    <Image className={`col-3`} src={missionImage} />
                    <h2 className="fw-bold text-center pt-2 ">Mission</h2>
                    <p className="text-center">{mission}</p>
                </div>
                <div
                    className={`d-flex row  justify-content-center pt-3 align-items-start ${style.colorGreen} `}
                >
                    <div className="d-flex row justify-content-center">
                        <Image className={`col-4`} src={valeurImage} />
                        <h2 className="fw-bold text-center pt-1">Valeur</h2>
                    </div>
                    <p className="text-center">{valeur} </p>
                </div>
            </div>
        </section>
    );
};

export default SectionWhyUs;

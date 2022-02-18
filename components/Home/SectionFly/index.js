import CardDestination from '../../Cards/Destination';
import kinshasa from '../../../assets/kinshasa.jpeg';
import afriqueduSud from '../../../assets/afriqueSuSud.jpeg';
import rome from '../../../assets/rome.jpeg';
import londres from '../../../assets/londres.jpeg';
import style from './style.module.css';
import Image from 'next/image';
import left from '../../../assets/left.svg';
import right from '../../../assets/right.svg';
import Link from 'next/link';
// import { Carousel } from '@trendyol-js/react-carousel';

const SectionFly = ({ sousServices }) => {
    return (
        <section className={`py-4  ${style.pLR}`}>
            <h1 className={`text-left ${style.color} fw-bold`}>Destination populaire</h1>
            <div className="d-flex py-3 pb-5 justify-content-between align-items-center">
                <div className="col-8">
                    <p className="h6 ">Voyagez L'esprit tranquille.</p>{' '}
                </div>

                <div className="col-sm-2 col-3">
                    <Link href={`/destination`} passHref>
                        <a
                            className={` d-flex justify-content-center   py-3 h6  fw-bold  ${style.styledbutton}`}
                        >
                            voir plus
                        </a>
                    </Link>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-3 justify-content-between   g-4">
                {sousServices.map((sousService, index) => (
                    <CardDestination
                        key={index}
                        text={sousService.pays}
                        number={index + 1}
                        capital={sousService.name}
                        alt={sousService.ville}
                        src={sousService.images[0]}
                        ratings="5"
                    />
                ))}
            </div>
        </section>
    );
};

export default SectionFly;

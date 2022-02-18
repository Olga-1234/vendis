import CardService from '../../Cards/Service';
import style from './style.module.css';
import traveling from '../../../assets/traveling.jpg';
import Image from 'next/image';
import Link from 'next/link';
const SectionWhoAreWe = ({ resume }) => {
    return (
        <section
            className={`col-12 d-flex px-sm-0 px-3 py-5 align-items-center justify-content-evenly flex-wrap ${style.dflexResponsive}  ${style.mLR}`}
        >
            <div className={`col-sm-4  col-12 ${style.pR}  ${style.after}  ${style.borderRadius}`}>
                <Image src={traveling} width="" height="" alt="" className={`${style.objectFit}`} />
            </div>
            <div className="col-sm-6 col-xs-12 py-3 ml-5 pl-5">
                <h1 className="text-start pt-5 pb-3 fw-bold px-2">
                    Qui <br />
                    Sommes-Nous?
                </h1>

                <p className="px-2 pt-3 pb-4 h6 lh-lg">{resume}</p>
                <div className="col-sm-3 col-md-5  col-3  ">
                    {' '}
                    <Link href={`/aproposdenous`} passHref>
                        <a
                            className={`mx-1 d-flex justify-content-center  px-3 py-3 h6  fw-bold  ${style.styledbutton}`}
                        >
                            voir plus
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SectionWhoAreWe;

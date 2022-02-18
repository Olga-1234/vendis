import React from 'react';
import CardCar from '../../Cards/Car';
import CardCarMore from '../../Cards/CarMore';
import prado from '../../../assets/pradoSansBg.png';
import toyota from '../../../assets/voiturefortuner.png';
import style from './style.module.css';
import Link from 'next/link';
const SectionCar = ({ services }) => {
    return (
        <section className="container py-5">
            <div className={`${style.relative}`}>
                <h1 className="text-left fw-bold pb-4">Location Voiture</h1>
                <p className="pb-5 col-sm-6 col-8">
                    Vous etes a la recherche d'une voiture a prix abordable pour quelques heures
                    ,quelques jours , quelques semaines ,
                    <br /> Nous vous offrons des vehicules recentes et tres bien equipes{' '}
                </p>
                <Link href="/destination" passHref>
                    <a className={`${style.btnNext}  fw-bold  px-4 py-3`}>Voir plus</a>
                </Link>
            </div>
            <div className=" row row-cols-1 row-cols-sm-2 justify-content-between row-cols-md-4 g-3">
                <CardCarMore src={services[0].images[1]} text={services[0].name} />
                <CardCar src={services[1].images[1]} text={services[1].name} />
                <CardCar src={services[2].images[1]} text={services[2].name} />
            </div>
        </section>
    );
};

export default SectionCar;

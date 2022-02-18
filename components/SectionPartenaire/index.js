import React from 'react';
import CardPartenaire from '../Cards/Partenaire';
import ifs from '../../assets/IFS.png';
import geokatanga from '../../assets/Geokatanga.png';
import jamon from '../../assets/Jamon.png';
import vendis from '../../assets/vendiS.png';
import itm from '../../assets/Holding.png';
import itmEnv from '../../assets/ENVIRON.png';
import style from './style.module.css';

const SectionPartenaire = () => {
    return (
        <section className={` ${style.height} bg-light py-4`}>
            <div className=" container col-12 ">
                <div className="pt-4 py-2">
                    <h1 className="fw-bold text-center">Nos Partenaires</h1>
                </div>
                <div className="row py-4 row-cols-sm-3 justify-content-between row-cols-md-6  row-cols-2">
                    <CardPartenaire src={vendis} alt="logo Vendis" />
                    <CardPartenaire src={itm} alt="logo itm" />
                    <CardPartenaire src={ifs} alt="logo ifs" />
                    <CardPartenaire src={jamon} alt="logo jamon" />
                    <CardPartenaire src={itmEnv} alt="logo itm environnement" />
                    <CardPartenaire src={geokatanga} alt="logo Geo katanga" />
                </div>
            </div>
        </section>
    );
};

export default SectionPartenaire;

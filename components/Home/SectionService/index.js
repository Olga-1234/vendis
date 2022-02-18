import React from 'react';
import CardCar from '../../Cards/Car';
import CardService from '../../Cards/Service';
import france from '../../../assets/france.jpeg';
import bus from '../../../assets/bus.jpg';
import visa from '../../../assets/passports.jpeg';
import protocole from '../../../assets/assistance.jpg';
import toyota from '../../../assets/prado.jpeg';
import covidtest from '../../../assets/covidtext.jpeg';

const SectionService = ({ services }) => {
    return (
        <section className={` container py-3 pb-5  `}>
            <h1 className={` py-5 fw-bold text-center `}>Nos Services</h1>
            <div className=" row  py-3 row-cols-sm-1 px-sm-0 px-2  justify-content-between row-cols-md-2  row-cols-1 ">
                {services.map((item, index) => (
                    <CardService
                        key={item._id}
                        src={item.images[index]}
                        service={item.name}
                        details={item.resume}
                    />
                ))}
            </div>
        </section>
    );
};

export default SectionService;

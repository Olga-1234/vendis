import CardAdress from '../CardAdress';
import style from './style.module.css';
import img from '../../../assets/Directions-bro.svg';
import airplane from '../../../assets/Destination-bro.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactCard = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState('');
    return (
        <div className="">
            <header className={` container ${style.heightHeader}`}>
                <h1 className={`display-5 ${style.responsivetext} pt-5  pb-3 fw-bold`}>
                    {' '}
                    Voyagez <br /> L'Esprit Tranquille
                </h1>
            </header>
            <section className="container py-4">
                <article
                    className={` ${style.responsivecard} col-12 row row-cols-2 row-cols-sm-2 justify-content-between row-cols-md-2`}
                >
                    <CardAdress
                        src={img}
                        pays="Rdc"
                        capital="Kinshasa"
                        adresse="12, Flamboyant, Kinshasa-Gombe"
                    />
                    <CardAdress src={img} pays="Rdc" capital="Kinshasa" adresse="12 de la presse" />
                </article>
            </section>
            <section className="bg-light py-4">
                <article className="container">
                    <div
                        className={` ${style.responsiveformulaire} col-12 row row-cols-2 row-cols-sm-2 justify-content-between row-cols-md-2`}
                    >
                        <div className={style.responsiveformulaire}>
                            <Image src={airplane} width="" height="" alt="image-avion" />
                        </div>

                        <div className={style.responsiveformulaire}>
                            <form
                                className="  py-2 d-flex justify-content-center row g-3"
                                onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
                            >
                                <h1 className=" text-center fw-bold">Vos Suggestions</h1>

                                <div className="col-md-12">
                                    <input
                                        type="email"
                                        tabIndex="1"
                                        placeholder="Email"
                                        className={`${style.focus} form-control`}
                                        id="inputEmail4"
                                        {...register('Email')}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        type="text"
                                        {...register('Name')}
                                        className="form-control"
                                        id="inputName4"
                                        placeholder="Nom"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputNumber"
                                        placeholder="Sujet"
                                        {...register('phone')}
                                    />
                                </div>

                                <div className="col-md-12">
                                    <textarea
                                        placeholder="Vos Suggestions"
                                        className={`"form-label form-control mx-1 ${style.height}`}
                                    ></textarea>
                                </div>

                                <button
                                    type="submi"
                                    className={`col-3 py-1 fw-bold my-3  ${style.styledbutton}`}
                                >
                                    envoyer
                                </button>
                            </form>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default ContactCard;

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './style.module.css';
import src from '../../assets/afrotourism.jpeg';
import Image from 'next/image';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
    .object({
        email: yup.string().email().required(),
        name: yup.string().required(),
        description: yup.string().required(),
        object: yup.string().required(),
        phone_number: yup.string().required(),
        service: yup.string().required(),
        sousService: yup.string()
    })
    .required();
const RservationCard = ({ services, entiteId, name, sousService, image }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    const [data, setData] = useState('');
    const [currentService, setCurrentService] = useState('');

    return (
        <section className={`col-11  ${style.width}`}>
            <div className="col-12 d-flex justify-content-evenly flex-wrap">
                <div className={`col-sm-5 col-12 ${style.relative} `}>
                    <Image src={image || src} layout={'fill'} priority />
                </div>
                <form
                    className="col-sm-6 col-12 pt-sm-0 pt-4 py-2 d-flex justify-content-center row"
                    onSubmit={handleSubmit((data) => {
                        setData(data);
                        if (sousService) {
                            data.sousService = sousService._id;
                        } else {
                        }

                        console.log(data);
                    })}>
                    <h1 className=" text-left fw-bold">Faite Votre Reservation</h1>
                    <div className="col-12 py-1">
                        <label htmlFor="email" className="form-label py-1 fw-bold">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className={`${style.focus} form-control`}
                            id="email"
                            {...register('email')}
                        />
                        {errors.email ? <p className="pt-2">{errors.email.message}</p> : ''}
                    </div>
                    <div className="col-sm-6 col-12 py-1">
                        <label htmlFor="name" className="form-label py-1  fw-bold">
                            Nom
                        </label>
                        <input
                            type="text"
                            {...register('name')}
                            placeholder="Nom"
                            className="form-control"
                            id="name"
                        />
                        {errors.name ? <p className="pt-2">{errors.name.message}</p> : ''}
                    </div>
                    <div className="col-sm-6 col-12 py-1">
                        <label htmlFor="phone_number" className="form-label py-1  fw-bold">
                            Téléphone
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="phone_number"
                            placeholder="Numero de telephone"
                            {...register('phone_number')}
                        />
                        {errors.phone_number ? (
                            <p className="pt-2">{errors.phone_number.message}</p>
                        ) : (
                            ''
                        )}
                    </div>{' '}
                    {name ? (
                        <>
                            <div className="col-sm-6  col-12 py-1">
                                <label htmlFor="object" className="form-label py-1  fw-bold">
                                    Objet
                                </label>
                                <input
                                    type="text"
                                    placeholder="Objet"
                                    className={`${style.focus} form-control`}
                                    id="object"
                                    {...register('object')}
                                />
                                {errors.object ? (
                                    <p className="pt-2">{errors.object.message}</p>
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className="col-sm-6  col-12 py-1">
                                <label htmlFor="reservation" className="form-label py-1  fw-bold">
                                    Reservation
                                </label>
                                <input
                                    type="text"
                                    defaultValue={name}
                                    placeholder="reservation"
                                    className={`${style.focus} form-control`}
                                    id="reservation"
                                    {...register('sousService')}
                                />
                            </div>
                        </>
                    ) : (
                        <div>
                            <div className="col-12 py-1">
                                <label htmlFor="obect" className="form-label py-1  fw-bold">
                                    Objet
                                </label>
                                <input
                                    type="text"
                                    placeholder="Objet"
                                    id="obect"
                                    className={`${style.focus} form-control`}
                                    {...register('object')}
                                />{' '}
                                {errors.object ? (
                                    <p className="pt-2">{errors.object.message}</p>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    )}
                    <input
                        type="hidden"
                        className="form-control"
                        value={entiteId}
                        placeholder="Numero de telephone"
                        {...register('entite')}
                    />
                    <div className="col-12 py-1">
                        <label htmlFor="inputService" className="form-label py-1  fw-bolder">
                            Service
                        </label>
                        <select
                            id="inputService"
                            className="col-12 form-select"
                            {...register('service')}
                            onChange={(e) => {
                                const name = services.find(
                                    (service) => service._id === e.target.value
                                );
                                setCurrentService(name.name);
                            }}>
                            {services.map((service) => {
                                return (
                                    <option key={service._id} value={service._id}>
                                        {service.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="col-12 py-1">
                        <label htmlFor="description" className="form-label py-1 fw-bold">
                            Votre Message
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            {...register('description')}
                            placeholder={'expliquer nous vos attentes concernant ' + currentService}
                            className={`"form-label form-control mx-1 ${style.height}`}></textarea>
                        {errors.description ? (
                            <p className="pt-2">{errors.description.message}</p>
                        ) : (
                            ''
                        )}
                    </div>
                    <button
                        type="submit"
                        className={` py-3 fw-bold my-3 mx-1 rounded ${style.button}`}>
                        reservation
                    </button>
                </form>
            </div>
        </section>
    );
};

export default RservationCard;

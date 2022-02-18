import Image from 'next/image';
import React from 'react';
import assistance from '../../assets/assistance.jpg';
import style from './style.module.css';
import guillemet from '../../assets/guillemets.svg';
import avatarf from '../../assets/avatarf.jpeg';
import avatarf2 from '../../assets/avatarf2.jpeg';
import avatarH2 from '../../assets/avatarH.jpeg';
import avatarH2U from '../../assets/avatarU.jpeg';
import avatar from '../../assets/vendis5.jpeg';

const CustomerReviews = () => {
    return (
        <section className="d-flex align-items-center pb-4 flex-wrap justify-content-center container">
            <div className=" col-6  align-items-center  ">
                {' '}
                <h1 className="col-12 fw-bold pb-5"> Ce que Disent Nos Clients</h1>
                <Image src={guillemet} height="40" width="40" />
                <p className=" py-2 lh-base">
                    Une belle expérience que l'on aimerait encore revivre, un bon accompagnement et
                    tous est à votre avantage.
                </p>
                <div className="d-flex justify-content-evenly col-3 ">
                    {' '}
                    <p className={` my-1 d-flex ${style.roundedBtn}`}></p>
                    <p className={` ${style.auteur} `}>Pierre Moulin</p>
                </div>
            </div>

            <div className={` col-6 d-flex flex-wrap ${style.PositionRelative} `}>
                <div className={`col-4 ${style.px} `}>
                    <Image
                        className={`${style.borderRadius} `}
                        src={avatarf2}
                        width="50"
                        height="50"
                        alt=""
                    />
                </div>
                <div className={`col-4 ${style.px5} ${style.PositionRelative}`}>
                    <Image
                        className={`${style.borderRadius} `}
                        src={avatarH2}
                        width="100"
                        height="100"
                        alt=""
                    />
                </div>
                <div className={`col-4  ${style.px7}  ${style.PositionRelative}`}>
                    <Image
                        className={`${style.borderRadius} `}
                        src={avatarf}
                        width="50"
                        height="50"
                        alt=""
                    />
                </div>

                <div className={`col-4  ${style.px2} ${style.PositionRelative} `}>
                    <Image
                        className={`${style.borderRadius} `}
                        src={avatarH2U}
                        width="75"
                        height="75"
                        alt=""
                    />
                </div>
                <div className={`col-4  ${style.px6} ${style.PositionRelative}`}>
                    <Image
                        className={`${style.borderRadius} `}
                        src={avatarf}
                        width="150"
                        height="150"
                        alt=""
                    />
                </div>
                <div className={`col-4  ${style.px3} ${style.PositionRelative} `}>
                    <Image
                        className={`${style.borderRadius} `}
                        src={avatar}
                        width="75"
                        height="75"
                        alt=""
                    />
                </div>

                <div className={`col-4  ${style.px4} ${style.PositionRelative}`}></div>

                <div className={`col-4  ${style.px8} ${style.PositionRelative}`}>
                    <Image
                        className={`${style.borderRadius} `}
                        src={assistance}
                        width="100"
                        height="100"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;

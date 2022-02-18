import Image from 'next/image';
import bar from '../../../assets/bar.png';
import style from './style.module.css';

const CardWhyUs = ({ text }) => {
    return <div className={` ${style.hover} py-4 border border-dark col-8`}>{text}</div>;
};

export default CardWhyUs;

import Image from 'next/image';
const CardPartenaire = ({ src, alt }) => {
    return (
        <div className="d-flex justify-content-center ">
            <Image
                src={src}
                height="80"
                width="80"
                alt={alt}
                priority
                placeholder="blur"
                blurDataURL={src}
            />
        </div>
    );
};

export default CardPartenaire;

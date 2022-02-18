import Protocole from '../../assets/assistance.jpg';
import protocole2 from '../../assets/protocole2.jpg';
import protocole3 from '../../assets/protocole.jpeg';
import CardSimple from '../../Cards/Simple';

const SectionProtocole = () => {
    return (
        <section className="container album py-3 ">
            <h1 className="text-center">Assistance Protocole</h1>
            <div className=" row row-cols-1 row-cols-sm-2 justify-content-between row-cols-md-4 g-3">
                <CardSimple src={Protocole} text="Protocole" />
                <CardSimple src={protocole2} text="Protocole" />
                <CardSimple src={protocole3} text="Protocole" />
            </div>
        </section>
    );
};

export default SectionProtocole;

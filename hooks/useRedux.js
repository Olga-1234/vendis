import { useDispatch, useSelector } from 'react-redux';
import { SelectServices, SelectEntite } from '../redux/StateSelectors';
import { SET_SERVICES, SET_ENTITE } from '../redux/StateActions';
export default function useRedux() {
    const dispatch = useDispatch();

    const Entite = useSelector(({ vendisVoyage }) => SelectEntite(vendisVoyage));
    const Services = useSelector(({ vendisVoyage }) => SelectServices(vendisVoyage));

    const SetServices = (services) => dispatch(SET_SERVICES(services));
    const SetEntite = (entite) => dispatch(SET_ENTITE(entite));
    return { Entite, Services, SetServices, SetEntite };
}

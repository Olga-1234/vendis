import { ADD_SERVICES, ADD_ENTITE } from './StateProvider';

export const SET_SERVICES = (services) => ({ type: ADD_SERVICES, payload: services });
export const SET_ENTITE = (entite) => ({ type: ADD_ENTITE, payload: entite });

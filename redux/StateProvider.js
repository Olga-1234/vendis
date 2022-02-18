const initialeState = {
    services: [],
    entite: {}
};

const StateProvider = (state = initialeState, { payload, type }) => {
    switch (type) {
        case ADD_SERVICES:
            return {
                services: payload
            };
        case ADD_ENTITE:
            return {
                entite: payload
            };
        default:
            return state;
    }
};
export const ADD_ENTITE = 'ADD_ENTITE';
export const ADD_SERVICES = 'ADD_SERVICES';

export default StateProvider;

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Provider } from 'react-redux';
import store from '../redux';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;

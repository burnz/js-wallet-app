import PropTypes from 'prop-types';
import React from 'react';
import { IndexRoute, Route, Router } from 'react-router';
import App from './components';
import { APP_ROOT } from './config';
import ContentContainer from './components/ContentContainer';

export const Routes = ({ history }) => (
    <Router key={Math.random()} history={history}>
        <Route path={APP_ROOT} component={App}>
            <IndexRoute component={ContentContainer}/>
        </Route>
    </Router>
);

Routes.propTypes = {
    history: PropTypes.shape({}).isRequired,
};

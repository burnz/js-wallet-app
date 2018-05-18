import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { init } from './actions';
import Header from './Header';
import Splash from './Splash';

class App extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
        loginInit: PropTypes.func,
    };

    componentWillMount = () => {
        this.props.init({});
    };

    render() {
        const { children = null } = this.props;

        return (
            <div className='app'>
                <Header/>
                <Splash/>
                {children}
            </div>
        );
    }
};

const mapDispatchToProps = {
    init,
};

export default connect(null, mapDispatchToProps)(App);

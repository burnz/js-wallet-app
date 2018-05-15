import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authenticate, unlock } from './service';
import Splash from './Splash';

class App extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
        authenticate: PropTypes.func,
        unlock: PropTypes.func,
    };

    componentDidMount = async () => {
        const { authenticate, unlock } = this.props;
        await authenticate();
        unlock();
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

const mapStateToProps = state => {
    return {
        balance: state.get('balance'),
    };
};

const mapDispatchToProps = {
    authenticate,
    unlock,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

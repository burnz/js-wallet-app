import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const Header = ({ balance }) => {
    const amount = balance.getIn(['data', 'confirmedBalanceString']);
    return (
        <div className='header'>
            <div className='home-menu pure-menu pure-menu-horizontal pure-menu-fixed'>
                <a className='pure-menu-heading' href=''>COINS</a>
                {amount &&
                <ul className='pure-menu-list'>
                    <li className='pure-menu-item pure-menu-selected'>
                        <a className='pure-menu-link'>Your Balance: {amount} Satoshis</a>
                    </li>
                </ul>
                }
            </div>
        </div>
    );
};

Header.propTypes = {
    balance: PropTypes.shape({}),
};

const mapStateToProps = state => {
    return {
        balance: state.get('balance'),
    };
};

export default connect(mapStateToProps, null)(Header);

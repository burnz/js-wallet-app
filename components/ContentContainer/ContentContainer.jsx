import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { dataStates } from '../../helpers/dataStates';
import FormError from '../FormError/FormError';
import BalanceForm from '../GetBalanceForm';
import Loader from '../Loader/Loader';
import SendCoinsForm from '../SendCoinsForm';

const ContentContainer = ({ login, balance, transactions }) => {
    const loginState = login.get('dataState');
    const balanceState = balance.get('dataState');
    const transactionsState = transactions.get('dataState');
    const loginError = login.get('error');
    const balanceAmount = balance.getIn(['data', 'confirmedBalanceString']);
    const { loading, failed } = dataStates;

    const loginIsLoading = loginState === loading;

    const isAnyLoading =
        loginIsLoading ||
        balanceState === loading ||
        transactionsState === loading;

    const isAnyFailed =
        loginState === failed ||
        balanceState === failed ||
        transactionsState === failed;

    const getTitle = isAnyFailed
        ? 'Something went wrong...'
        : !balanceAmount
                         ? 'Get Your Balance'
                         : 'Send Some Coins';

    return (
        <div className='content-wrapper'>
            <div className='content'>
                {isAnyLoading
                    ? (<Loader/>)
                    : (<h2 className='content-head is-center'>{getTitle}</h2>)
                }
                {loginError
                    ? (<FormError error={loginError}/>)
                    : (<div className='pure-g'>
                        <div className='l-box-lrg pure-u-1 pure-u-md-2-5'>
                            {!loginIsLoading
                                ? (<div>
                                    {!balanceAmount
                                        ? <BalanceForm balance={balance}/>
                                        : <SendCoinsForm transactions={transactions}/>}
                                </div>)
                                : null
                            }
                        </div>
                    </div>)
                }
            </div>
            <div className='footer l-box is-center'>Coins Coins Coins...</div>
        </div>
    );
};

ContentContainer.propTypes = {
    login: PropTypes.shape({}),
    balance: PropTypes.shape({}),
    transactions: PropTypes.shape({}),
};

const mapStateToProps = state => {
    return {
        login: state.get('login'),
        balance: state.get('balance'),
        transactions: state.get('transactions'),
    };
};

export default connect(mapStateToProps, null)(ContentContainer);

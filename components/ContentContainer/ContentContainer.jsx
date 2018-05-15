import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import GetBalanceForm from '../GetBalanceForm';
import { dataStates } from '../GetBalanceForm/reducer';
import Loader from '../Loader/Loader';
import SendCoinsForm from '../SendCoinsForm';

const ContentContainer = ({ balance, transaction }) => {
    const balanceState = balance.get('state');
    const transactionState = transaction.get('state');
    const { notAsked, loading, loaded, failed } = dataStates;
    const isAnyLoading = balanceState === loading || transactionState === loading;
    const isSendScreen = balanceState === loaded && transactionState !== failed && transactionState !== loading;
    const isFailed = balanceState === failed || transactionState === failed;
    return (
        <div className='content-wrapper'>
            <div className='content'>
                {isAnyLoading && <Loader/>}
                <h2 className='content-head is-center'>
                    {balanceState === notAsked && 'Get Your Balance'}
                    {isSendScreen && 'Send Some Coins'}
                    {isFailed && 'Something went wrong...'}
                </h2>
                <div className='pure-g'>
                    <div className='l-box-lrg pure-u-1 pure-u-md-2-5'>
                        {balanceState === notAsked && <GetBalanceForm/>}
                        {isSendScreen && <SendCoinsForm/>}
                    </div>
                </div>
            </div>
            <div className='footer l-box is-center'>
                Coins Coins Coins...
            </div>
        </div>
    );
};

ContentContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    balance: PropTypes.shape({}),
    transaction: PropTypes.shape({}),
};

const mapStateToProps = state => {
    return {
        balance: state.get('balance'),
        transaction: state.get('transaction'),
    };
};

export default connect(mapStateToProps, null)(ContentContainer);

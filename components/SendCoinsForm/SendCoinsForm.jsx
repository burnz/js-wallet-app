import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { dataStates } from '../../helpers/dataStates';
import FormError from '../FormError/FormError';
import { init } from './actions';

class SendCoinsForm extends React.PureComponent {
    static propTypes = {
        sendCoins: PropTypes.func,
        transactions: PropTypes.shape({}),
    };

    state = {
        from: '5af9b8c9987ce7bd0720f4e8bc8d8a76',
        to: '5afab384dbd2a1b6072a618826e1101a',
        amount: 0.1 * 1e8,
    };

    handleChangeFrom = (e) => {
        this.setState({ from: e.target.value });
    };

    handleChangeTo = (e) => {
        this.setState({ to: e.target.value });
    };

    handleChangeAmount = (e) => {
        this.setState({ amount: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { from, to, amount } = this.state;
        this.props.init({ params: { from, to, amount } });
    };

    render() {
        const { transactions } = this.props;
        const isLoading = transactions.get('dataState') === dataStates.loading;
        const error = transactions.get('error');
        const { from, to, amount } = this.state;
        return (
            <form className='pure-form pure-form-stacked' onSubmit={this.handleSubmit}>
                {error && <FormError error={error}/>}
                <fieldset>
                    <label htmlFor='from'>Your Wallet Address</label>
                    <input
                        id='from'
                        type='text'
                        placeholder='from'
                        disabled={isLoading}
                        value={from}
                        onChange={this.handleChangeFrom}/>
                    <label htmlFor='to'>Your Wallet Address</label>
                    <input
                        id='from'
                        type='text'
                        placeholder='to'
                        disabled={isLoading}
                        value={to}
                        onChange={this.handleChangeTo}/>
                    <label htmlFor='to'>Amount Of Coins</label>
                    <input
                        id='amount'
                        type='text'
                        placeholder='to'
                        disabled={isLoading}
                        value={amount}
                        onChange={this.handleChangeAmount}/>
                    <input className='pure-button' type='submit' value='SEND COINS' disabled={isLoading}/>
                </fieldset>
            </form>
        );
    }
};

const mapDispatchToProps = {
    init,
};

export default connect(null, mapDispatchToProps)(SendCoinsForm);

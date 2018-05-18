import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { dataStates } from '../../helpers/dataStates';
import { init } from './actions';
import FormError from '../FormError';

class BalanceForm extends PureComponent {
    static propTypes = {
        init: PropTypes.func,
        balance: PropTypes.shape({}),
    };

    state = { id: '5af9b8c9987ce7bd0720f4e8bc8d8a76' };

    handleChange = (event) => {
        this.setState({ id: event.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { id } = this.state;
        this.props.init({ params: { id } });
    };

    render() {
        const { balance } = this.props;
        const isLoading = balance.get('dataState') === dataStates.loading;
        const error = balance.get('error');
        return (
            <form className='pure-form pure-form-stacked' onSubmit={this.handleSubmit}>
                {error && <FormError error={error}/>}
                <fieldset>
                    <label htmlFor='address'>Your Wallet Address</label>
                    <input
                        id='address'
                        type='text'
                        placeholder='ID'
                        disabled={isLoading}
                        value={this.state.id}
                        onChange={this.handleChange}/>
                    <input className='pure-button' type='submit' value='GET YOUR BALANCE' disabled={isLoading}/>
                </fieldset>
            </form>
        );
    }
};

const mapDispatchToProps = {
    init,
};

export default connect(null, mapDispatchToProps)(BalanceForm);

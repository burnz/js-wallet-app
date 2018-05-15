import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getBalance } from './actions';
import { dataStates } from './reducer';

class GetBalanceForm extends React.PureComponent {
    static propTypes = {
        getBalance: PropTypes.func,
        balance: PropTypes.shape({}),
    };

    state = { id: '5af9b8c9987ce7bd0720f4e8bc8d8a76' };

    handleChange = (event) => {
        this.setState({ id: event.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { id } = this.state;
        this.props.getBalance({ id });
    };

    render() {
        return (
            <form className='pure-form pure-form-stacked' onSubmit={this.handleSubmit}>
                <fieldset>
                    <label htmlFor='address'>Your Wallet Address</label>
                    <input
                        id='address'
                        type='text'
                        placeholder='ID'
                        disabled={this.props.balance.get('state') === dataStates.state}
                        value={this.state.id}
                        onChange={this.handleChange}/>
                    <input className='pure-button' type='submit' value='GET YOUR BALANCE'/>
                </fieldset>
            </form>
        );
    }
};

const mapStateToProps = state => {
    return {
        balance: state.get('balance'),
    };
};

const mapDispatchToProps = {
    getBalance,
};

export default connect(mapStateToProps, mapDispatchToProps)(GetBalanceForm);

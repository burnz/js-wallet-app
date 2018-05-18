import PropTypes from 'prop-types';
import React from 'react';

const FormError = ({ error }) => {
    return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
};

FormError.propTypes = {
    error: PropTypes.string.isRequired,
};

export default FormError;

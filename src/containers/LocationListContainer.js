import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setCity } from './actions';

class LocationListContainer extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
}

const mapDispathToProps = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispathToProps)(LocationListContainer);
import React from 'react'
import PropTypes from 'prop-types';

const Label = ({text, htmlFor}) => {
    return (
        <label htmlFor={htmlFor}>
            {text}
        </label>
    )
}


Label.propTypes = {
    text: PropTypes.string
}
export default Label

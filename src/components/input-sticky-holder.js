import React from 'react';
import PropTypes from 'prop-types';


function onFocus(evt) {
	evt.target.placeholder = '';
}

const InputStickyHolder = ({ placeholder, ...props }) => {
	function onBlur(evt) {
		evt.target.placeholder = placeholder;
	}

	return (
		<input
			placeholder={placeholder}
			onFocus={onFocus}
			onBlur={onBlur}
			{...props}
		/>
	);
};

InputStickyHolder.propTypes = {
	placeholder: PropTypes.string.isRequired,
};

export default InputStickyHolder;
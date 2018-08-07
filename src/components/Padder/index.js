import React from 'react'
import PropTypes from 'prop-types'

const Padder = ({ p, v, h }) =>
	<div
		style={{
			padding: `${v ? p : 0}px ${h ? p : 0}px`
		}}
	/> 

Padder.defaultProps = {
	p: 8,
	v: true,
	h: false,
}

Padder.propTypes = {
	p: PropTypes.number,
	v: PropTypes.bool,
	h: PropTypes.bool
}

export default Padder
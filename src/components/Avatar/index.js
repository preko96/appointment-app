import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ height, backgroundColor, style }) => 
	<div style={{ height: height, width: height, borderRadius: '50%', backgroundColor: backgroundColor, ...style }}>
	</div>

Avatar.defaultProps = {
	backgroundColor: 'transparent',
	height: 48
}

Avatar.propTypes = {
	height: PropTypes.number,
	backgroundColor: PropTypes.string,
	style: PropTypes.object
}

export default Avatar

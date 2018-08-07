import React from 'react'
import PropTypes from 'prop-types'

const H = ({ size, style, children, ...rest }) => {
	const HeaderText = `h${size}`
	return (
		<HeaderText style={{ marginBottom: 0, ...style}} {...rest}>
			{children}
		</HeaderText>
	)
}

H.defaultProps = {
	size: 3
}

H.propTypes = {
	size: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object,
	children: PropTypes.node
}

export default H
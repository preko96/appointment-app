import React from 'react'
import PropTypes from 'prop-types'

const Flex = ({ children, grow, basis, justify, align, direction, backgroundColor, style, height, padder, ...rest }) =>
	<div style={{ 
		display: 'flex', 
		flexGrow: height ? 0 : grow,
		flexBasis: basis, 
		flexDirection: direction, 
		justifyContent: justify, 
		alignItems: align,
		height: height, 
		padding: padder ? 10 : 0, 
		backgroundColor: backgroundColor, 
		...style }} 
	{...rest}>
		{ children }
	</div>

Flex.defaultProps = {
	flex: 1,
	grow: 1,
	basis: '0%',
	height: undefined, 
	padder: false,
	backgroundColor: 'transparent',
	direction: 'column',
	justify: 'initial',
	align: 'initial'
}

Flex.propTypes = {
	children: PropTypes.node,
	grow: PropTypes.number,
	basis: PropTypes.string,
	justify: PropTypes.string,
	align: PropTypes.string,
	direction: PropTypes.string,
	backgroundColor: PropTypes.string,
	style: PropTypes.object,
	height: PropTypes.oneOf([
		PropTypes.number,
		PropTypes.string
	]),
	padder: PropTypes.bool,
}

export default Flex
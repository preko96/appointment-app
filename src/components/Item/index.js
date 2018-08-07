import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../../components/Flex'

const Item = ({ left, body, right, style, ...rest }) => 
	<Flex height={48} basis='inital' direction='row' style={{ boxSizing: 'content-box', ...style }} {...rest}>
		<Flex align='flex-start'>
			{ left }
		</Flex>
		<Flex align='center'>
			{ body }
		</Flex>
		<Flex align='flex-end'>
			{ right }
		</Flex>
	</Flex>

Item.propTypes = {
	left: PropTypes.node,
	body: PropTypes.node,
	right: PropTypes.node,
	style: PropTypes.object
}

export default Item
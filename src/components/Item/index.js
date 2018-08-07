import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../../components/Flex'

const Item = ({ left, body, right, ...rest }) => 
	<Flex height={64} direction='row' {...rest}>
		<Flex align='justify-start'>
			{ left }
		</Flex>
		<Flex align='center'>
			{ body }
		</Flex>
		<Flex align='justify-end'>
			{ right }
		</Flex>
	</Flex>

Item.propTypes = {
	left: PropTypes.node,
	body: PropTypes.node,
	right: PropTypes.node,
}

export default Item
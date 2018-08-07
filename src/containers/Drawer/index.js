import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../../components/Flex/'

class Drawer extends React.Component {
	
	state = { open: false }

	toggle = () => this.setState(state=>({ open: !state.open }))

	render() {
		const { children, ...rest } = this.props
		const { open } = this.state
		return(
			<Flex style={{ 
				width: open ? 300 : 0, 
				height: '100vh', 
				position: 'absolute', 
				transition: 'width 0.3s ease' 
			}} {...rest}>
				{children}
			</Flex>
		)
	}
} 

Drawer.propTypes = {
	children: PropTypes.node
}

export default Drawer
import React from 'react'

const Flex = ({ children, flex, grow, basis, justify, align, direction, backgroundColor, style, height, padder, ...rest }) =>
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

const Layout = ({ children, style, ...rest }) => 
	<div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', ...style }} {...rest}>
		{ children }
	</div>

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

const Avatar = ({ height, backgroundColor, style }) => 
	<div style={{ height: height, width: height, borderRadius: '50%', backgroundColor: backgroundColor, ...style }}>
	</div>

Avatar.defaultProps = {
	backgroundColor: 'transparent',
	height: 48
}

class UserScreen extends React.Component {
	
	_drawer = null
	setDrawerRef = node => this._drawer = node

	toggleDrawer = () => this._drawer.toggle()

	render() {
		return(
			<Layout>
				<Drawer backgroundColor='red' ref={this.setDrawerRef}/>
				<Flex direction='row' height={64}>
					<Flex backgroundColor='yellow'/>
					<Flex backgroundColor='purple'/>
					<Flex backgroundColor='gray' justify='center' align='flex-end'>
						<Avatar backgroundColor='white' style={{ marginRight: 8 }}/>
					</Flex>
				</Flex>
				<Flex backgroundColor='pink'/>
				<Flex backgroundColor='black' height={64} onClick={this.toggleDrawer}/>
			</Layout>
		)
	}
}


export default UserScreen
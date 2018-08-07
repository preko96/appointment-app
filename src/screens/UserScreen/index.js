import React from 'react'
import Drawer from '../../containers/Drawer'
import Layout from '../../components/Layout'
import Flex from '../../components/Flex'
import Avatar from '../../components/Avatar'

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
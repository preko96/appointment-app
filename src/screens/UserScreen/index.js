import React from 'react'
import Drawer from '../../containers/Drawer'
import Layout from '../../components/Layout'
import Flex from '../../components/Flex'
import H from '../../components/H'
import Padder from '../../components/Padder/'
import InputField from '../../components/InputField/'

class UserScreen extends React.Component {
	
	_drawer = null
	setDrawerRef = node => this._drawer = node
	toggleDrawer = () => this._drawer.toggle()

	render() {
		return(
			<Layout>
				<Drawer backgroundColor='firebrick' ref={this.setDrawerRef}/>
				<Flex direction='row' height={48}>
					<Flex justify='center' align='flex-start'>
					</Flex>

					<Flex justify='center' align='center'>
					</Flex>

					<Flex justify='center' align='flex-end'>
					</Flex>
				</Flex>
				<Flex backgroundColor='pink'>
					<Flex/>
					<Flex align='center'>
						<H size='2' style={{ color: 'white' }}>Book an appointment!</H>
						<Padder p={4}/>
						<InputField width={400} containerStyle={{ maxWidth: '50%' }} onSearch={()=>console.warn('hello')}/>
					</Flex>
				</Flex>
				<Flex justify='center' align='center' height={48} onClick={this.toggleDrawer}>
					<H>Just your everyday footer</H>
				</Flex>
			</Layout>
		)
	}
}


export default UserScreen
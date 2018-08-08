import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { onChangeInput } from '../../redux/inputs/actions'
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
		const { searchInput, onChangeInput } = this.props
		return(
			<Layout>
				<Drawer backgroundColor='firebrick' ref={this.setDrawerRef}/>
				<Flex direction='row' height={96}>
					<Flex justify='center' align='flex-start'>
					</Flex>

					<Flex justify='center' align='center'>
						<H size='1'>Quite simple</H>
					</Flex>

					<Flex justify='center' align='flex-end'>
					</Flex>
				</Flex>
				<Flex backgroundColor='pink'>
					<Flex/>
					<Flex align='center'>
						<H size='2' style={{ color: 'white' }}>Book an appointment!</H>
						<Padder p={4}/>
						<InputField controlled value={searchInput} onChangeText={onChangeInput} width={400} containerStyle={{ maxWidth: '50%' }} onSearch={()=>console.warn('hello')}/>
					</Flex>
				</Flex>
				<Flex justify='center' align='center' height={48} onClick={this.toggleDrawer}>
					<H>Just your everyday footer</H>
				</Flex>
			</Layout>
		)
	}
}

const mapStateToProps = state => ({
	searchInput: state.inputs.friends
})

const mapDispatchToProps = dispatch => ({
	onChangeInput: text => dispatch(onChangeInput('friends', text))
})

UserScreen.propTypes = {
	onChangeInput: PropTypes.func.isRequired,
	searchInput: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)
export { UserScreen }
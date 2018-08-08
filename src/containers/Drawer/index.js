import React from 'react'
import Flex from '../../components/Flex/'
import Item from '../../components/Item/'
import Avatar from '../../components/Avatar/'
import Padder from '../../components/Padder/'
import withAdditionalStyle from '../../hoc/withAdditionalStyle'

const DrawerElement = withAdditionalStyle({
	overflow: 'hidden',
	marginBottom: 10
})(Item)

class Drawer extends React.Component {
	
	state = { open: false }

	toggle = () => this.setState(state=>({ open: !state.open }))

	render() {
		const { ...rest } = this.props
		const { open } = this.state
		return(
			<Flex style={{ 
				width: open ? 300 : 0, 
				height: '100vh', 
				position: 'absolute', 
				transition: 'width 0.3s ease',
			}} {...rest}>
				<Item
					height={76}
					padder
					right={ <Avatar height={76} backgroundColor='lightseagreen'/> }
				/>
				<Padder/>
				<Flex padder>
					<DrawerElement
						left={ <p>Left</p> }
						body={ <p>Body</p> }
						right={ <p>Right</p> }
					/>
					<DrawerElement
						left={ <p>Left</p> }
						body={ <p>Body</p> }
						right={ <p>Right</p> }
					/>
				</Flex>
			</Flex>
		)
	}
}

export default Drawer
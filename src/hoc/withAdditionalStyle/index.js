import React from 'react'

const withAdditionalStyle = style => WrappedComponent => 
	class WithAdditionalStyle extends React.Component {
		render() {
			const props = this.props
			return <WrappedComponent style={style} {...props} />
		}
	}

export default withAdditionalStyle
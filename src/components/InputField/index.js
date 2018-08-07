import React from 'react'
import PropTypes from 'prop-types'

class InputField extends React.Component {

	onChangeText = event => {
		const { onChangeText } = this.props
		if(onChangeText)
			onChangeText(event.target.value)
	}

	render() {
		const { width, height, onSearch, containerStyle, inputStyle, buttonStyle } = this.props
		return(
			<div style={{ 
				display: 'flex',
				overflow: 'hidden',
				borderRadius: 16,
				width: width,
				height: height,
				...containerStyle
			}}>
				<input 
					style={{
						width: '100%',
						border: 'none',
						fontSize: '1.2rem',
						padding: '0 16px',
						...inputStyle
					}}
				/>
				<div onClick={onSearch} style={{ 
					backgroundColor: 'firebrick', 
					width: 60, 
					...buttonStyle 
				}}/>
			</div>
		)
	}
}

InputField.defaultProps = {
	width: 200,
	height: 40
}

InputField.propTypes = {
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	containerStyle: PropTypes.object,
	inputStyle: PropTypes.object,
	buttonStyle: PropTypes.object,
	onChangeText: PropTypes.func,
	onSearch: PropTypes.func,
}

export default InputField
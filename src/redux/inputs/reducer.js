import {
	ON_CHANGE_INPUT
} from './constants'

const initState = {
	friends: '',
}

export default (state=initState, action={}) => {
	switch(action.type) {
	case ON_CHANGE_INPUT: {
		const { field, text } = action.payload
		return {
			...state,
			[field]: text
		}
	}
	default:
		return state
	}
}
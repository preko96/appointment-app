import { 
	ON_CHANGE_INPUT
} from './constants'

export const onChangeInput = (field, text) => ({
	type: ON_CHANGE_INPUT,
	payload: {
		field,
		text
	}
})
import { 
	ON_CHANGE_INPUT
} from './actions'

export const onChangeInput = (field, text) => ({
	type: ON_CHANGE_INPUT,
	payload: {
		field,
		text
	}
})
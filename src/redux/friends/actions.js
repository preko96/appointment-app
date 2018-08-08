import { 
	ON_ADD_FRIEND,
	ON_REMOVE_FRIEND
} from './actions'

export const onAddFriend = friend => ({
	type: ON_ADD_FRIEND,
	payload: friend
})

export const onRemoveFriend = id => ({
	type: ON_REMOVE_FRIEND,
	payload: id
})
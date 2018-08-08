import mockFriends from '../../mock/friends'

const initState = mockFriends

export default (state=initState, action={}) => {
	switch(action.type) {
	default: 
		return state
	}
}
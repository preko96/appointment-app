import { createSelector } from 'reselect'

export const selectFriends = state => state.friends
export const selectFilter = state => state.inputs.friends

export const filteredFriendsSelector = createSelector(
	selectFriends,
	selectFilter,
	(friends, filter) => friends.filter(friend=>friend.includes(filter))
)

import { all, takeEvery } from 'redux-saga/effects'
import { 
	ON_ADD_FRIEND,
	ON_REMOVE_FRIEND
} from './constants'

function* onAddFriendWorker() {
	
}

function* onRemoveFriendWorker() {

}

export default function* rootSaga() {
	yield all([
		takeEvery(ON_ADD_FRIEND, onAddFriendWorker),
		takeEvery(ON_REMOVE_FRIEND, onRemoveFriendWorker),
	])
}
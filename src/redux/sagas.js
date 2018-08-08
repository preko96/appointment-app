import { all } from 'redux-saga/effects'
import friends from './friends/saga'

export default function* rootSaga() {
	yield all([
		friends()
	])
}

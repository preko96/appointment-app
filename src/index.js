import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import store from './redux/store'
import UserScreen from './screens/UserScreen'

const EnhancedApp = () => 
	<Provider store={store}>
		<UserScreen />
	</Provider>

ReactDOM.render(<EnhancedApp />, document.getElementById('root'))

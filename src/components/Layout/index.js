import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children, style, ...rest }) => 
	<div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', ...style }} {...rest}>
		{ children }
	</div>

Layout.propTypes = {
	children: PropTypes.node,
	style: PropTypes.object
}

export default Layout
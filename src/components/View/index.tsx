import React from 'react'

interface ViewProps extends React.ComponentProps<'div'> {
	children?: React.ReactNode
}
const View: React.FC<ViewProps> = ({ children, ...props }) => {
	return <div {...props}>{children}</div>
}

export default View


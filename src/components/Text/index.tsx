import React, { ComponentProps } from 'react'

interface TextProps extends ComponentProps<'p'> {
	children?: React.ReactNode
}
const Text: React.FC<TextProps> = ({ children, ...props }) => {
	return <p {...props}>{children}</p>
}

export default Text

import View from 'components/View'
import React from 'react'
import useDarkMode from 'use-dark-mode'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

interface LayoutProps {
	children?: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
	const darkMode = useDarkMode(false)

	return (
		<View
			className={`${
				darkMode.value ? 'dark' : ''
			} text-foreground bg-background h-screen`}
		>
			<Navbar />
			<View className="flex flex-col h-[calc(100%-65px)]">
				<Sidebar />
				{children}
			</View>
		</View>
	)
}

export default Layout

import Text from 'components/Text'
import View from 'components/View'
import React from 'react'
import useDarkMode from 'use-dark-mode'
import IMAGES from 'utils/images'

import MoonIcon from '@iconify/icons-solar/moon-bold-duotone'
import SunIcon from '@iconify/icons-solar/sun-bold-duotone'
import { Icon } from '@iconify/react'
import { Avatar } from '@nextui-org/avatar'
import { Button } from '@nextui-org/button'
import { Navbar as Nav, NavbarBrand, NavbarContent } from '@nextui-org/navbar'
import { Spacer } from '@nextui-org/spacer'

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = () => {
	const darkMode = useDarkMode(false)

	return (
		<Nav maxWidth="full" isBordered>
			<NavbarBrand>
				<Avatar size="sm" name="GuatNext" src={IMAGES.icon} />

				<Spacer x={2} />

				<View className="flex flex-col">
					<Text className="font-bold">GuatNext</Text>
					<Text className="text-xs text-default-500">Events and Bookings</Text>
				</View>
			</NavbarBrand>

			<NavbarContent justify="end">
				<Button
					isIconOnly
					variant="bordered"
					onPress={darkMode.toggle}
					aria-label="toggle-darkmode"
				>
					<Icon icon={darkMode.value ? SunIcon : MoonIcon} />
				</Button>

				<Avatar
					size="sm"
					as="button"
					isBordered
					color="primary"
					name="Jason Hughes"
					className="transition-transform"
					src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
				/>
			</NavbarContent>
		</Nav>
	)
}

export default Navbar

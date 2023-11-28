import View from 'components/View'
import React from 'react'

import HomeIcon from '@iconify/icons-solar/home-bold-duotone'
import DateIcon from '@iconify/icons-solar/calendar-date-bold-duotone'
import UserIcon from '@iconify/icons-solar/user-bold-duotone'
import PaletteIcon from '@iconify/icons-solar/palette-bold-duotone'
import { Icon } from '@iconify/react'
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox'

interface SidebarProps {}
const Sidebar: React.FC<SidebarProps> = () => {
	return (
		<View className="w-60 h-full">
			<Listbox
				color="primary"
				variant="solid"
				aria-label="sidebar"
				selectionMode="single"
				disallowEmptySelection
				className="px-4 py-4 h-full bg-content1"
			>
				<ListboxSection title="Estadistica" showDivider>
					<ListboxItem
						key="bookings"
						className="mb-2"
						startContent={<Icon icon={DateIcon} />}
					>
						Reservas
					</ListboxItem>

					<ListboxItem
						key="users"
						className="mb-2"
						startContent={<Icon icon={UserIcon} />}
					>
						Usuarios
					</ListboxItem>
				</ListboxSection>

				<ListboxSection title="General">
					<ListboxItem
						key="home"
						className="mb-2"
						startContent={<Icon icon={HomeIcon} />}
					>
						Inicio
					</ListboxItem>

					<ListboxItem
						key="customize"
						className="mb-2"
						startContent={<Icon icon={PaletteIcon} />}
					>
						Personalizar
					</ListboxItem>
				</ListboxSection>
			</Listbox>
		</View>
	)
}

export default Sidebar

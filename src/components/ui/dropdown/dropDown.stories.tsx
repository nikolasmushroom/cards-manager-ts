import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './dropdown.tsx'
import StartIcon from '@/common/icons/StartIcon.tsx'
import MenuIcon from '@/common/icons/MenuIcon.tsx'
import Pencil from '@/common/icons/Pencil.tsx'
import TrashCan from '@/common/icons/TrashCan.tsx'
import { Avatar } from '@/components/ui'
import { AvatarInfo } from '../avatar/avatarInfo/'
import Logout from '@/common/icons/Logout.tsx'
import ProfileIcon from '@/common/icons/ProfileIcon.tsx'
import { DropdownItemWithIcon } from './DropdownItems'
import { DropdownItem } from './DropdownItems'

const meta = {
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>
export const DefaultDropdown: Story = {
  args: {
    trigger: <MenuIcon />,
    children: (
      <>
        <DropdownItemWithIcon icon={<StartIcon />} caption={'Learn'} />
        <DropdownItemWithIcon icon={<Pencil />} caption={'Edit'} />
        <DropdownItemWithIcon icon={<TrashCan />} caption={'Delete'} />
      </>
    ),
  },
}
export const DropdownWithAvatar: Story = {
  args: {
    trigger: (
      <span>
        <Avatar userName={'Ivan'} />
      </span>
    ),

    children: (
      <>
        <DropdownItem>
          <Avatar userName={'Ivan'} />
          <AvatarInfo name={'Ivan'} caption={'j&johnson@gmail.com'} />
        </DropdownItem>
        <DropdownItemWithIcon icon={<ProfileIcon />} caption={'My Profile'} />
        <DropdownItemWithIcon icon={<Logout />} caption={'Sign Out'} />
      </>
    ),
  },
}

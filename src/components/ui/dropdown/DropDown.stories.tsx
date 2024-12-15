import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown.tsx'
import StartIcon from '../../../common/icons/StartIcon.tsx'
import DropdownMenu from '../../../common/icons/DropdownMenu.tsx'
import Pencil from '../../../common/icons/Pencil.tsx'
import TrashCan from '../../../common/icons/TrashCan.tsx'
import { Avatar } from '../avatar/Avatar.tsx'
import { AvatarInfo } from '../avatar/avatarInfo/AvatarInfo.tsx'
import Logout from '../../../common/icons/Logout.tsx'
import ProfileIcon from '../../../common/icons/ProfileIcon.tsx'
import { DropdownItemWithIcon } from './DropdownItems'
import { DropdownItem } from './DropdownItems'

const meta = {
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/UI/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultDropdown: Story = {
  args: {
    trigger: <DropdownMenu />,
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
    trigger: <Avatar userName={'Ivan'} />,
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

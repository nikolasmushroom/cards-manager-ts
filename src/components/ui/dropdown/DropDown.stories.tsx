import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown, DropdownItem } from './Dropdown.tsx'
import StartIcon from '../../../common/assets/icons/StartIcon.tsx'
import DropdownMenu from '../../../common/assets/icons/DropdownMenu.tsx'
import { Typography } from '../typography'
import Pencil from '../../../common/assets/icons/Pencil.tsx'
import TrashCan from '../../../common/assets/icons/TrashCan.tsx'

const meta = {
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/UI/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultDropdown: Story = {
  args: {
    align: 'end',
    trigger: <DropdownMenu />,
    children: (
      <>
        <DropdownItem>
          <StartIcon />
          <Typography as={'p'} variant={'Caption'}>
            Learn
          </Typography>
        </DropdownItem>
        <DropdownItem>
          <Pencil />
          <Typography as={'p'} variant={'Caption'}>
            Edit
          </Typography>
        </DropdownItem>
        <DropdownItem>
          <TrashCan />
          <Typography as={'p'} variant={'Caption'}>
            Delete
          </Typography>
        </DropdownItem>
      </>
    ),
  },
}

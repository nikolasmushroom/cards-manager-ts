import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './modal.tsx'
import { useState } from 'react'
import { Button } from '../button'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultModal: Story = {
  args: {
    open: true,
    title: 'Title',
  },
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <>
        <Button
          onClick={() => {
            setOpen(true)
          }}
        >
          Open modal
        </Button>
        <Modal title={'Modal'} open={open} onClose={() => setOpen(false)}>
          <div style={{ padding: '18px 24px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
          </div>
        </Modal>
      </>
    )
  },
}
export const ModalWithoutTitle: Story = {
  args: {
    open: true,
  },
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <>
        <Button
          onClick={() => {
            setOpen(true)
          }}
        >
          Open modal
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div style={{ padding: '18px 24px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
          </div>
        </Modal>
      </>
    )
  },
}

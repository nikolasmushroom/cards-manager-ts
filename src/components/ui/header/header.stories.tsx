import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './header.tsx'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/UI/Header',
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const AuthorizedUserHeader: Story = {
  args: {
    isLoggedIn: true,
    shortName: 'Nikolay',
    userPhoto:
      'https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/08/how-strong-is-spider-man-in-comics-movies-and-beyond.jpg',
  },
}
export const AnauthorizedUserHeader: Story = {
  args: {
    isLoggedIn: false,
  },
}

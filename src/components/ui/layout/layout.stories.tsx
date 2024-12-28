import type { Meta, StoryObj } from '@storybook/react'
import { Layout } from '@/components/ui/layout/layout.tsx'

const meta = {
  component: Layout,
  tags: ['autodocs'],
  title: 'Components/Layout',
  argTypes: {},
} satisfies Meta<typeof Layout>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultLayout: Story = {
  render: () => {
    return (
      <Layout>
        <div>Hello</div>
      </Layout>
    )
  },
}

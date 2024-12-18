import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography.tsx'

import { BrowserRouter, Link } from 'react-router-dom'

const meta = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>

export const AllTypography: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant={'H1'}>Heading 1</Typography>
        <Typography variant={'H2'}>Heading 2</Typography>
        <Typography variant={'H3'}>Heading 3</Typography>
        <Typography variant={'H4'}>Heading 4</Typography>
        <Typography variant={'Body1'}>Body 1</Typography>
        <Typography variant={'Body2'}>Body 2</Typography>
        <Typography variant={'Subtitle1'}>Subtitle 1</Typography>
        <Typography variant={'Subtitle2'}>Subtitle 2</Typography>
        <Typography variant={'Caption'}>Caption</Typography>
        <Typography variant={'Overline'}>Overline</Typography>
        <BrowserRouter>
          <Typography variant={'Link1'} as={Link} to={'/it-incubator.com'}>
            Link 1
          </Typography>
          <Typography variant={'Link2'} as={Link} to={'/it-incubator.com'}>
            Link 2
          </Typography>
        </BrowserRouter>
      </div>
    )
  },
}
export const H1: Story = {
  args: {
    children: 'Some text',
    variant: 'H1',
  },
}
export const H2: Story = {
  args: {
    children: 'Some text',
    variant: 'H2',
  },
}
export const H3: Story = {
  args: {
    children: 'Some text',
    variant: 'H3',
  },
}
export const H4: Story = {
  args: {
    children: 'Some text',
    variant: 'H4',
  },
}
export const Body1: Story = {
  args: {
    children: 'Some text',
    variant: 'Body1',
  },
}
export const Body2: Story = {
  args: {
    children: 'Some text',
    variant: 'Body2',
  },
}
export const Subtitle1: Story = {
  args: {
    children: 'Some text',
    variant: 'Subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    children: 'Some text',
    variant: 'Subtitle2',
  },
}
export const Caption: Story = {
  args: {
    children: 'Some text',
    variant: 'Caption',
  },
}

export const Overline: Story = {
  args: {
    children: 'Some text',
    variant: 'Overline',
  },
}
export const Link1: Story = {
  args: {
    children: 'Some text',
    variant: 'Link1',
  },
}
export const Link2: Story = {
  args: {
    children: 'Some text',
    variant: 'Link2',
  },
}

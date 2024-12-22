import * as Tabs from '@radix-ui/react-tabs'
import s from './tabSwitcher.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { Typography } from '@/components/ui'

export type TabType = {
  children: string
  value: string
}
export type TabSwitcherProps = {
  tabs: TabType[]
  disabled?: boolean
  label?: string
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabSwitcher = ({ tabs, label, disabled, className, ...rest }: TabSwitcherProps) => {
  const classNames = {
    tabsContainer: clsx(s.tabsContainer, className),
    default: clsx(s.default),
  }
  const mappedTabs = tabs.map((tab: TabType) => {
    return (
      <Tabs.Trigger
        className={classNames.default}
        value={tab.value}
        disabled={disabled}
        key={tab.children}
      >
        {tab.children}
      </Tabs.Trigger>
    )
  })
  return (
    <div>
      {label && (
        <Typography variant={'Body2'} as={'p'}>
          {label}
        </Typography>
      )}
      <Tabs.Root className={s.root} defaultValue="tab1" {...rest}>
        <Tabs.List className={s.List}>{mappedTabs}</Tabs.List>
      </Tabs.Root>
    </div>
  )
}

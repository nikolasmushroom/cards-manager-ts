import * as Tabs from '@radix-ui/react-tabs'
import s from './tabSwitcher.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
export type TabType = {
  children: string
  value: string
}
export type TabSwitcherProps = {
  tabs: TabType[]
  disabled?: boolean
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabSwitcher = ({ tabs, disabled, className, ...rest }: TabSwitcherProps) => {
  const classNames = {
    default: clsx(s.default, className),
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
    <Tabs.Root className={s.root} defaultValue="tab1" {...rest}>
      <Tabs.List className={s.List} aria-label="Manage your account">
        {mappedTabs}
      </Tabs.List>
    </Tabs.Root>
  )
}

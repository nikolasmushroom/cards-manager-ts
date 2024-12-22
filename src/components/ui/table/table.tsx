import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import s from './table.module.scss'
import { clsx } from 'clsx'

export type TableProps = {} & ComponentPropsWithoutRef<'table'>
export const Table = forwardRef<ElementRef<'table'>, TableProps>(({ className, ...rest }, ref) => {
  const classNames = {
    table: clsx(s.table, className),
  }
  return <table ref={ref} {...rest} className={classNames.table}></table>
})
export type THeadProps = {} & ComponentPropsWithoutRef<'thead'>
export const THead = forwardRef<ElementRef<'thead'>, THeadProps>(({ className, ...rest }, ref) => {
  const classNames = {
    tableHead: clsx(s.th, className),
  }
  return <thead ref={ref} {...rest} className={classNames.tableHead}></thead>
})
export type TBodyProps = {} & ComponentPropsWithoutRef<'tbody'>
export const TBody = forwardRef<ElementRef<'tbody'>, TBodyProps>(({ className, ...rest }, ref) => {
  const classNames = {
    tableBody: clsx(className),
  }
  return <tbody ref={ref} {...rest} className={classNames.tableBody}></tbody>
})

export type TRowProps = {} & ComponentPropsWithoutRef<'tr'>
export const TRow = forwardRef<ElementRef<'tr'>, TRowProps>(({ className, ...rest }, ref) => {
  const classNames = {
    tableRow: clsx(s.tr, className),
  }
  return <tr ref={ref} {...rest} className={classNames.tableRow}></tr>
})
export type TCellProps = {} & ComponentPropsWithoutRef<'td'>
export const TCell = forwardRef<ElementRef<'td'>, TCellProps>(({ className, ...rest }, ref) => {
  const classNames = {
    tableCell: clsx(s.td, className),
  }
  return <td ref={ref} {...rest} className={classNames.tableCell}></td>
})

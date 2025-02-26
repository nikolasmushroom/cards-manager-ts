import { ComponentPropsWithoutRef } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
export type DropdownItemProps = {} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>;
export declare const DropdownItem: ({ itemID, onSelect, disabled, children, ...rest }: DropdownItemProps) => import("react/jsx-runtime").JSX.Element;

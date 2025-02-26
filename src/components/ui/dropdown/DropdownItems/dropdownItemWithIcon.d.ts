import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { DropdownItem } from "@/components/ui/dropdown/DropdownItems/dropdownItem.tsx";
export type DropdownItemWithIconProps = {
    caption: string;
    icon: ReactNode;
} & ComponentPropsWithoutRef<typeof DropdownItem>;
export declare const DropdownItemWithIcon: ({ itemID, onSelect, disabled, className, icon, caption, ...rest }: DropdownItemWithIconProps) => import("react/jsx-runtime").JSX.Element;

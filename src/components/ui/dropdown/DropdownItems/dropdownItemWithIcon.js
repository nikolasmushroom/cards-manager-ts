import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from '../Dropdown.module.scss';
import { Typography } from '@/components/ui';
import { DropdownItem } from "@/components/ui/dropdown/DropdownItems/dropdownItem.tsx";
export const DropdownItemWithIcon = ({ itemID, onSelect, disabled, className, icon, caption, ...rest }) => {
    const classNames = {
        item: clsx(styles.Item, className),
    };
    return (_jsxs(DropdownItem, { itemID: itemID, onSelect: onSelect, disabled: disabled, ...rest, className: classNames.item, children: [icon, _jsx(Typography, { as: 'p', variant: 'Caption', children: caption })] }));
};

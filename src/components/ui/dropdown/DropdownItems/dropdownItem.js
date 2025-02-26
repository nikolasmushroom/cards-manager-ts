import { jsx as _jsx } from "react/jsx-runtime";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from '../dropdown.module.scss';
export const DropdownItem = ({ itemID, onSelect, disabled, children, ...rest }) => {
    return (_jsx(DropdownMenu.Item, { className: styles.Item, ...rest, itemID: itemID, onSelect: onSelect, children: children }));
};

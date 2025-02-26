import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePagination } from './usePagination.tsx';
import s from './Pagination.module.scss';
import { Typography } from '../typography';
import clsx from 'clsx';
import SelectIcon from '../../../common/icons/Arrow.tsx';
import { SelectCustom } from '../select';
import { useEffect } from 'react';
export const Pagination = ({ initialPage, initialItemsPerPage, options = [10, 20, 30, 50, 100], totalItemsCount, onItemsPerPageChange, onCurrenPageChange, className, }) => {
    const { pages, switchItemsPerPage, switchToNextPage, switchToPrevPage, totalPageCount, currentPage, itemsPerPage, switchPage, } = usePagination({ initialPage, initialItemsPerPage, onCurrenPageChange, totalItemsCount });
    useEffect(() => {
        onItemsPerPageChange && onItemsPerPageChange(itemsPerPage);
    }, [itemsPerPage]);
    const itemsPerPageOptions = options.map((size) => ({
        value: size.toString(),
        children: size.toString(),
    }));
    const classNames = {
        switchToPrevPageButton: clsx(s.arrowKey, s.left, currentPage === 1 && s.disabled),
        switchToNextPageButton: clsx(s.arrowKey, s.right, currentPage === totalPageCount && s.disabled),
        paginationContainer: clsx(s.wrapper, className),
    };
    return (_jsxs("div", { className: classNames.paginationContainer, children: [_jsx(Typography, { variant: 'Body2', className: classNames.switchToPrevPageButton, onClick: switchToPrevPage, children: _jsx(SelectIcon, {}) }), pages?.map((page, i) => {
                return (_jsx(Typography, { variant: 'Body2', className: clsx(s.pageButton, currentPage === page && s.current, typeof page === 'string' && s.passive), onClick: () => switchPage(page), children: page }, i));
            }), _jsx("div", { className: classNames.switchToNextPageButton, onClick: switchToNextPage, children: _jsx(SelectIcon, {}) }), _jsxs("div", { className: s.pageSelectorContainer, children: [_jsx(Typography, { as: 'p', variant: 'Body2', children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C" }), _jsx(SelectCustom, { options: itemsPerPageOptions, placeholder: itemsPerPage.toString(), onValueChange: switchItemsPerPage, className: s.select, style: { height: '24px' } }), _jsx(Typography, { as: 'p', variant: 'Body2', children: "\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435" })] })] }));
};

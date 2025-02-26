import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TCell, THead, TRow } from './table.tsx';
import Arrow from '@/common/icons/Arrow.tsx';
import s from './table.module.scss';
import { Typography } from '../typography';
export const TableHeader = ({ columns, sort, setSort }) => {
    const changeSortHandler = (key) => {
        if (setSort && sort && sort.key === key) {
            switch (sort.direction) {
                case 'asc':
                    setSort({ key, direction: 'desc' });
                    break;
                case 'desc':
                    setSort({ key, direction: 'asc' });
                    break;
                default:
                    setSort({ key, direction: 'asc' });
            }
        }
        else {
            setSort && setSort({ key, direction: 'asc' });
        }
    };
    return (_jsx(THead, { children: _jsx(TRow, { children: columns.map((column) => (_jsx(TCell, { onClick: () => changeSortHandler(column.key), children: _jsxs("div", { className: s.THeadCeil, children: [_jsx(Typography, { variant: 'Subtitle2', children: column.title }), sort && sort.key === column.key && (_jsx("div", { children: sort.direction === 'asc' ? (_jsx(Arrow, { className: s.arrowUp })) : (_jsx(Arrow, { className: s.arrowDown })) }))] }) }, column.key))) }) }));
};

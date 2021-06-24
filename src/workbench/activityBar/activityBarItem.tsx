import * as React from 'react';
import { useRef } from 'react';
import { classNames } from 'mo/common/className';
import { IActivityBarItem } from 'mo/model/workbench/activityBar';
import { IMenuItemProps, Menu } from 'mo/components/menu';
import { IActivityBarController } from 'mo/controller/activityBar';

import {
    indicatorClassName,
    labelClassName,
    itemClassName,
    itemCheckedClassName,
    itemDisabledClassName,
} from './base';
import { DropDown } from 'mo/components';
import { DropDownRef } from 'mo/components/dropdown';

export function ActivityBarItem(
    props: IActivityBarItem & IActivityBarController
) {
    const {
        checked = false,
        disabled = false,
        title = '',
        data = {},
        render,
        iconName = '',
        id,
        onClick,
        contextMenu = [],
        className,
        onContextMenuClick,
    } = props;

    const contextMenuRef = useRef<DropDownRef>(null);

    const onClickMenuItem = (
        e: React.MouseEvent,
        item: IMenuItemProps | undefined
    ) => {
        onContextMenuClick?.(e, item);
        contextMenuRef.current?.dispose();
    };

    const onClickItem = function (event) {
        if (onClick) {
            onClick(props.id, props);
        }
    };

    const content = (
        <a
            title={title}
            className={classNames(labelClassName, 'codicon', iconName)}
        >
            {render?.() || null}
        </a>
    );
    const overlay = <Menu onClick={onClickMenuItem} data={contextMenu} />;

    const hasContextMenu = contextMenu.length > 0;

    return (
        <li
            id={id}
            onClick={onClickItem}
            className={classNames(
                className,
                itemClassName,
                checked ? itemCheckedClassName : '',
                disabled ? itemDisabledClassName : ''
            )}
            data-id={data.id}
        >
            {hasContextMenu ? (
                <DropDown
                    ref={contextMenuRef}
                    trigger="click"
                    placement="rightBottom"
                    overlay={overlay}
                >
                    {content}
                </DropDown>
            ) : (
                content
            )}
            {checked ? <div className={indicatorClassName}></div> : null}
        </li>
    );
}

import React from 'react'

export type Dictionary<T = any> = { [key: string]: T }

export interface NavItem {
    link: string;
    view: React.FC;
    displayName: string;
}

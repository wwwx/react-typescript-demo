import React from 'react'

export interface NavItem {
    link: string;
    view: React.FC;
    displayName: string;
}

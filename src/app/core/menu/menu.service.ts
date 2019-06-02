import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    menuItems: Array<any>;

    constructor() {
        this.menuItems = [];
    }

    addMenu(items: Array<{
        id?: string,
        text: string,
        heading?: boolean,
        link?: string,     // internal route links
        target?: string,   // anchor target="_blank|_self|_parent|_top|framename"
        icon?: string,
        alert?: string,
        submenu?: Array<any>,
        roles?: Array<any>,
        contextual?: boolean,
        context?: string
    }>) {
        items.forEach((item) => {
            this.menuItems.push(item);
        });
    }

    getMenu() {
        return this.menuItems;
    }

}

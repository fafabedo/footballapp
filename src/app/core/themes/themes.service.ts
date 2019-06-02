import { Injectable } from '@angular/core';



@Injectable()
export class ThemesService {

    styleTag: any;
    defaultTheme: string = 'B';

    constructor() {
        this.createStyle();
        this.setTheme(this.defaultTheme);
    }

    private createStyle() {
        const head = document.head || document.getElementsByTagName('head')[0];
        this.styleTag = document.createElement('style');
        this.styleTag.type = 'text/css';
        this.styleTag.id = 'appthemes';
        head.appendChild(this.styleTag);
    }

    setTheme(name) {

    }

    injectStylesheet(css) {
        // this.styleTag.innerHTML = css;
    }

    getDefaultTheme() {
        return this.defaultTheme;
    }

}

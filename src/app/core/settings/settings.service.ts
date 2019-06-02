import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class SettingsService {

    public user: any;
    public app: any;
    public layout: any;
    public authentication: any;

    constructor() {

        // User Settings
        // -----------------------------------
        this.user = {
            name: 'Fabricio Bedoya',
            job: 'ng-developer',
            picture: 'assets/img/dummy.png'
        };

        // App Settings
        // -----------------------------------
        this.app = {
            name: 'Signo',
            description: 'Signo - Operational and Financial app',
            year: '2017',
            debug: false
        };

        // Layout Settings
        // -----------------------------------
        this.layout = {
            isFixed: true,
            isCollapsed: true,
            isBoxed: false,
            isRTL: false,
            horizontal: false,
            isFloat: false,
            asideHover: false,
            theme: 'E',
            asideScrollbar: false,
            isCollapsedText: false,
            useFullLayout: false,
            hiddenFooter: false,
            offsidebarOpen: false,
            asideToggled: false,
            viewAnimation: 'ng-fadeInUp',
            showThemeToggle: true,
            userBlockSidebar: false,
            userBlockHeader: true
        };

        this.authentication = {
            enable: true,
            marginRefresh: 2 * 60 * 1000, // 2 minute
            checkExpireSession: 10 * 1000, // 10 seconds
            admin: true,
            picture: 'assets/img/user/02.jpg'
        };

    }

    getAppSetting(name) {
        return name ? this.app[name] : this.app;
    }
    getUserSetting(name) {
        return name ? this.user[name] : this.user;
    }
    getLayoutSetting(name) {
        return name ? this.layout[name] : this.layout;
    }

    setAppSetting(name, value) {
        if (typeof this.app[name] !== 'undefined') {
            this.app[name] = value;
        }
    }
    setUserSetting(name, value) {
        if (typeof this.user[name] !== 'undefined') {
            this.user[name] = value;
        }
    }
    setLayoutSetting(name, value) {
        if (typeof this.layout[name] !== 'undefined') {
            return this.layout[name] = value;
        }
    }

    toggleLayoutSetting(name) {
        return this.setLayoutSetting(name, !this.getLayoutSetting(name));
    }

}

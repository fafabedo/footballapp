import {NgModule} from '@angular/core';

import {LayoutComponent} from './layout.component';
import {FooterComponent} from './footer/footer.component';
import {SharedModule} from '../shared/shared.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CustomizerComponent} from './customizer/customizer.component';
import {NotificationSidebarComponent} from './notification-sidebar/notification-sidebar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        SharedModule,
        NgbModule,
    ],
    providers: [],
    declarations: [
        LayoutComponent,
        FooterComponent,
        SidebarComponent,
        NavbarComponent,
        CustomizerComponent,
        NotificationSidebarComponent,
    ],
    exports: [
        LayoutComponent,
        FooterComponent,
        SidebarComponent,
        NavbarComponent,
        CustomizerComponent,
        NotificationSidebarComponent,
    ]
})
export class LayoutModule {
}

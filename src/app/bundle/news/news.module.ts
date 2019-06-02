import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";

import {SharedModule} from "../../shared/shared.module";

import {NewsListComponent} from "./news-list/news-list.component";
import {NewsDetailComponent} from "./news-details/news-detail.component";
import {ArticleService} from "./service/article.service";

const routes: Routes = [
    { path: '', component: NewsListComponent },
    { path: ':id', component: NewsDetailComponent}
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        NewsListComponent,
        NewsDetailComponent
    ],
    providers: [
        ArticleService
    ],
    exports: [
        RouterModule
    ]
})
export class NewsModule { }
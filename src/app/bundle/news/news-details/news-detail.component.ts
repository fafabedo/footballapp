import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../service/article.service";
import {Article} from "../model/article.model";

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

    article: Article;
    constructor(private router: Router,
                private route: ActivatedRoute,
                private articleService: ArticleService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.id !== undefined) {
                this.articleService.getList()
                    .subscribe(articles => {
                        this.article = articles.find(article => article.nid == params.id);
                        console.log(this.article);
                    });
            }
        });
    }

}

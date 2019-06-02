import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {Article} from "../model/article.model";
import {ArticleService} from "../service/article.service";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

    articles: Array<Article> = [];
    limit: number = 12;

    constructor(private articleService: ArticleService,
                private sanitizer: DomSanitizer,
                private router: Router) { }

    ngOnInit() {
        this.articleService.getList()
            .subscribe(articles => this.prepareArticles(articles));
    }

    prepareArticles(articles: Article[]) {
        console.log(articles);
        this.articles = articles;
    }

    goToArticle(article: Article) {
        if (article.type == 'article') {
            this.router.navigate(['/stories/' + article.nid]);
        }
        else {
            this.router.navigate(['/matches/report/' + article.nid]);
        }
    }

    seeMore(value: number) {
        this.limit = this.limit + value;
    }

}

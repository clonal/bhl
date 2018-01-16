import {Component, OnInit} from '@angular/core';
import {Article} from '../model/article';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: 'newsPage.component.html'
})

export class NewsPageComponent implements OnInit {
  article$: Observable<Article>|null = null;
  constructor(private route: ActivatedRoute,
              private client: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const articleId = params.get('id');
        this.article$ = this.client.get('/api/article/showArticle?article=' + articleId).map(result => {
          if (result['article']) {
            return result['article'] as Article;
          } else {
            return null;
          }
        });
      });
  }
}

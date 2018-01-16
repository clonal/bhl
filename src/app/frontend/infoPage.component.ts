import {Component, OnInit} from '@angular/core';
import {Column} from '../model/column';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'infoPage.component.html'
})

export class InfoPageComponent implements OnInit {
  columnName: string;
  column$: Observable<Column>|null = null;
  children: object[];
  constructor(private route: ActivatedRoute,
              private client: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.columnName = params.get('name');
        this.column$ = this.client.get('/api/column/getColumn/' + this.columnName).map(result => {
            if (result['column']) {
              return result['column'] as Column;
            } else {
              return null;
            }
          });
        this.column$.subscribe((result) => {
          if (result.id !== 0 && result.parent === 0) {
            // 获取子栏目
            this.client.get('/api/column/getChildrenColumn/' + result.id)
              .subscribe(children => {
                this.children = children as object[];
              });
          }
          if (result.id !== 0 && result.parent !== 0) {
            // 获取子文章
            this.client.get('/api/article/showArticle/listArticles/' + result.id)
              .subscribe(children => {
                this.children = children as object[];
              });
          }
        });
      });
  }
}

import {Component, OnInit} from '@angular/core';
import {Question} from '../model/question';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: 'questions.component.html'
})

export class QuestionsComponent implements OnInit {
  questions$: Observable<Question[]>|null = null;
  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    this.questions$ = this.client.get('/api/question/listQuestions').map((result) => {
      if (result) {
        return result as Question[];
      } else {
        return null;
      }
    });
  }
}

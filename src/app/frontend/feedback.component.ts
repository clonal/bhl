import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Feedback} from '../model/feedback';
import {DateService} from '../utils/date.service';

@Component({
  templateUrl: 'feedback.component.html'
})

export class FeedbackComponent {
  feedbackForm: FormGroup;
  constructor(private client: HttpClient,
              private fb: FormBuilder,
              private dateService: DateService) {
    this.createForm();
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      name: '',
      category: 0,
      email: '',
      order: '',
      suggest: ''
    });
  }

  onSubmit() {
    const feedback = new Feedback(
      0,
      +this.feedbackForm.get('category').value,
      1,
      this.feedbackForm.get('name').value,
      this.feedbackForm.get('email').value,
      this.feedbackForm.get('order').value,
      1,
      this.feedbackForm.get('suggest').value,
      '',
      this.dateService.fmtDate(),
      ''
    );
    this.client.post('/api/feedback/addFeedback', feedback).subscribe((result) => {
      if (result['success']) {
        alert('提交成功！');
      } else if (result['error']) {
        alert('提交失败，请重新尝试!');
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-long',
  templateUrl: './long.component.html',
  styleUrls: ['./long.component.css']
})
export class LongComponent implements OnInit {
  longForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.longForm = this.fb.group({
      keywords: '',
      careers: '',
      subjects: '',
      strands: '',
      outcome: '',
      competency: '',
      grade: '',
      cluster: '',
      standard: ''
    })
  }

}

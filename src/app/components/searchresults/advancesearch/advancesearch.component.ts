import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-advancesearch',
  templateUrl: './advancesearch.component.html',
  styleUrls: ['./advancesearch.component.css']
})
export class AdvancesearchComponent implements OnInit {

  constructor(private httpService: HttpClient,
    private ref: ChangeDetectorRef) { }
  careerField: object;
  academicSubjects: object;



  ngOnInit() {
    this.httpService.get('../../../assets/json/classes.json').subscribe(
      data => {
        this.careerField = data;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    console.log(this.careerField);
  }

}

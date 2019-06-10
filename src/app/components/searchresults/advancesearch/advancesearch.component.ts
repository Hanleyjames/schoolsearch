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
  academicSubjectsArray: string[];
  tempIndex: string;
  tempIndex2: string;
  tempCareerField: string;
  tempAcademicSubject: string;
  currentCareerField: string;
  currentAcademicSubject: string;

  isEmpty(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  storeIndex() {
    const i = (document.getElementById('firstDropDown') as HTMLInputElement).value;
    this.tempIndex = i;

  }


  ngOnInit() {
    this.httpService.get('../../../assets/json/classes.json').subscribe(
      data => {
        this.careerField = data;
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );

  }

}

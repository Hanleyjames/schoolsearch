import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SearchdropdownService } from '../../../_services/searchdropdown.service';
const util = require('util');

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.css']
})
export class ShortComponent implements OnInit {

  constructor(private httpService: HttpClient,
    private ref: ChangeDetectorRef,
    private serviceData: SearchdropdownService ) { }
  //type definitions
  data: object;
  careers: object;
  subjects: object;
  currentCareer: string;
  currentSubject: string;
  tempCareers: string[];
  tempSubject: string[];
  dataPassed: object;
  dataToSend: object;

  
  
  //Method to store index position of career dropdown value(i)
  storeIndex() {
    //For example, lets assume it is Engineering
    const i = ((document.getElementById('careerDropDown') as HTMLInputElement).value || 0);
    this.dataPassed = this.data[i];
    //Set subjects to the strand object
    this.subjects = this.data[i].strand;
    //sets TempCareers to the name
    this.tempCareers = this.data[i].name;
    //sets tempSubject to a blank array
    this.tempSubject = [];
    //Object.entries returns an array of a given own enumerated key pair properties of the data.strand
    Object.entries(this.data[i].strand).forEach(entry => {
      //Gets the name of the subject
      let key = entry[0];
      //Gets the nested object of the subject
      let value = entry[1];
      //A for each loop iterated over each object of the subject(Clinical Engineering)
      //Object.entries(value).forEach(entry => {
      //  //iterates over strand name key, outcome key, and subjects(Mat, Sci...) key
      //  let key = entry[0];
      //  //iterates over strand name values, outcomes values, and subjects objects
      //  let value = entry[1];
      //  let x = [key, value];

      //})
      //pushes the subject names into an array
      console.log(key);
      this.tempSubject.push(key);
    })
    //pass the data
    this.storeSubject();
  }

  //stores chosen index and career options
  storeSubject() {
    //Set j to the value of the second drop down or the value of zero if the input element is an empty string / true
    const j = ((document.getElementById('subjectDropDown') as HTMLInputElement).value || 0);
    //Set a locally scoped subject based on the temp array subject.
    let currentSelectedSubject = this.tempSubject[j];
    //Set dataToSend to the selected json data
    this.dataToSend = this.subjects[currentSelectedSubject];
  }

  // Pass the message to the service and redirect the view
  passResults() {
    this.serviceData.changeMessage(this.dataToSend);
  }

  ngOnInit() {
    this.httpService.get('../../../assets/json/classes.json').subscribe(
      data => {
        this.data = data;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}

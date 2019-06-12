import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.css']
})
export class ShortComponent implements OnInit {

  constructor(private httpService: HttpClient,
    private ref: ChangeDetectorRef) { }
  //type definitions
  data: object;
  careers: object;
  subjects: object;
  currentCareer: string;
  currentSubject: string;
  tempCareers: string[];
  tempSubject: string[];
  
  //Method to store index position of career dropdown value(i)
  storeIndex() {
    //For example, lets assume it is Engineering
    const i = (document.getElementById('careerDropDown') as HTMLInputElement).value;
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
      Object.entries(value).forEach(entry => {
        //iterates over strand name key, outcome key, and subjects(Mat, Sci...) key
        let key = entry[0];
        //iterates over strand name values, outcomes values, and subjects objects
        let value = entry[1];
        let x = [key, value];

      })
      //pushes the subject names into an array
      console.log(key);
      this.tempSubject.push(key);
    })
    //pass the data
    this.storeSubject(this.data[i]);
  }
  //stores chosen index and career options
  storeSubject(currentcareer) {
    //sets currentCarrer to the chosen json career option
    this.currentCareer = currentcareer;
    //Set j to the value of the second drop down
    const j = (document.getElementById('academicSubjectDropDown') as HTMLInputElement).value;
    console.log("j : " + j);

  }
  //write setter
  setSearchTerms(name, strand, subjects) {

  }
  //finish emitter to results

  ngOnInit() {
    this.httpService.get('../../../assets/json/classes.json').subscribe(
      data => {
        this.data = data;
        console.log(data);
        // for (let i = 0; i < x.length; i++) {
        //   console.log(data[0].strand.MechanicalEngineering.);
        // }
        Object.entries(data[0].strand).forEach(entry => {
          let key = entry[0];
          let value = entry[1];
          let x = [key, value];
          console.log(x);
        })
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}

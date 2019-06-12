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

    this.tempCareers = this.data[i].name;
    this.tempSubject = [];
    Object.entries(this.data[i].strand).forEach(entry => {
      let key = entry[0];
      let value = entry[1];
      Object.entries(value).forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        let x = [key, value];
        console.log("Key & value: "+x)
      })
      console.log("Key: "+key);
      this.tempSubject.push(key);
    })
  }

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

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
  tempIndexI: string;
  tempIndexJ: string;
  tempCareers: string[];
  tempSubject: string[];
  
  //Method to store index position of career dropdown value(i)
  storeIndex(){
    const i = (document.getElementById('careerDropDown') as HTMLInputElement).value;
    this.tempIndexI = i;
    this.subjects = this.data[i].strand;
    for(let x = 0; x < this. data[i].strand;  x++ ){
      console.log(this.data[i].strand[x]);
    }
    console.log(this.tempSubject);
    this.tempCareers = this.data[i].name;
    this.tempSubject = [];
    Object.entries(this.data[i].strand).forEach(entry => {
      let key = entry[0];
      let value = entry[1];
      Object.entries(value).forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        let x = [key, value];
        console.log(x)
      })
      console.log(key);
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

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

  ngOnInit() {
    this.httpService.get('../../../assets/json/classes.json').subscribe(
      data => {
        this.careerField = data;
        console.log(data);
        console.log(data[0].name);
        console.log(data[0].name.strand[0]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}

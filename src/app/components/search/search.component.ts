import { Component, OnInit } from '@angular/core';
import { SearchdropdownService } from '../../_services/searchdropdown.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  message: object;

  constructor(private data: SearchdropdownService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    console.log(this.message);
  }



}

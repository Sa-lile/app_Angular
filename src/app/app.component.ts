import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  message: string = "";
 liste;
  
  constructor(private dataService:DataService) { }
  
  ngOnInit() {
    this.liste = this.dataService.listeArticles;
  }
 
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  items:any=[];

 constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getAllItems().subscribe(data => {
      this.items = data;
    });
  }
}

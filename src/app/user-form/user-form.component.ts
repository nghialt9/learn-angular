import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  Employees = [
    {id: '001', name: 'Tèo', addr: 'TP.HCM', age: 33},
    {id: '002', name: 'Nam', addr: 'TP.Hà Nội', age: 32},
    {id: '003', name: 'Tùng', addr: 'TP.Vinh', age: 31},
    {id: '004', name: 'Tính', addr: 'TP.Huế', age: 30}
  ];
  isHighlight = true;
  constructor() { }

  ngOnInit() {
  }
}

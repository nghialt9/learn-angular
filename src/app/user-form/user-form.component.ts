import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../model/employees.model';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() employees: Employee[] = [{
    ID: "001", Name: "Nghĩa", ImagePath: "assets/images/employees/Ngay5Hue1.jpg", Sex: "Male"
  }, {
    ID: "002", Name: "Phương", ImagePath: "assets/images/employees/Ngay5Hue2.jpg", Sex: "FeMale"
  },
  {
    ID: "003", Name: "Trí", ImagePath: "assets/images/employees/Ngay5Hue3.jpg", Sex: "Male"
  },
  {
    ID: "004", Name: "Tùng", ImagePath: "assets/images/employees/Ngay5Hue4.jpg", Sex: "Male"
  }];
  Boolean: boolean;
  @Output() employeesUpdated: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() valueBoolean = new EventEmitter<Boolean>();
  constructor() {
  }
  update(index:number) {
    // later you will see what this is for
    this.employeesUpdated.emit(this.employees[index]);
    this.valueBoolean.emit(this.Boolean = true)
  }
}

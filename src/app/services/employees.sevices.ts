import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Employee } from '../model/employees.model';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class EmployeeService {
    Employees = new BehaviorSubject< Employee[]>([{
            ID:"001", Name:"Nghĩa", ImagePath:"assets/images/employees/Ngaay5Hue1.jpg", Sex:"Male"
        },{
            ID:"002", Name:"Phương", ImagePath:"assets/images/employees/Ngaay5Hue2.jpg", Sex:"FeMale"
        }]);

    getAllEmployee(): Observable<Employee[]> {
        return this.Employees.asObservable();
    }
}

